import { Router } from "express"
import { v4 as uuidv4 } from 'uuid'
import { DBClient } from "../database"
import { Listing, Negotiation, NegotiationRequest, NegotiationUpdate, Offer } from '../datamodels'
import { isNegotiationRequest, isNegotiationUpdate } from "../typeguards"
import * as auth from './auth'

export const negoRouter = Router()
const dbConnect = new DBClient()
const negotiations = dbConnect.getDb().collection('negotiations')
const listings = dbConnect.getDb().collection('listings')

negoRouter.route('/')
    .all(async function (req, res, next) {
        let authHead = req.get('Authorization');

        // make sure auth header is present
        if (!authHead) {
            return res
                .status(401)
                .json({ message: "Authorization headers not set" })
        }

        // make sure the token is generally valid.
        // specfic resource permissions should be checked within specific #METHOD handlers (below)
        let isValidToken = await auth.validateToken(authHead.split(" ")[1])
        if (!isValidToken) return res.status(401).json({ message: "Invalid token" })
        next()
    })
    .get(async function (req, res) {
        if (req.query.id) {
            let nego = await negotiations.findOne<Negotiation>({ id: req.body.id })
            let token = req.get('Authorization')!.split(' ')[1]
            let requesterId = (await auth.getTokenOwner(token))!
            if (!nego) return res.status(404).json({ message: "Negotiation thread not found" })
            if (requesterId !== nego.borrower_id || requesterId !== nego.lender_id) {
                return res.status(403).json({ message: "Not authorized to access resource" })
            }
            res.status(200).json(nego)
        } else {
            let token = req.get('Authorization')!.split(' ')[1]
            // will always be string, since token was validated prior
            let requesterId = (await auth.getTokenOwner(token))!
            let nego = await negotiations.find<Negotiation>({
                $or: [
                    { borrower_id: requesterId },
                    { lender_id: requesterId }
                ]
            }).toArray()
            res.status(200).json(nego)
        }
    })
    .patch(async function (req, res) {
        if (!req.query.type) return res.sendStatus(400)

        if (req.query.type === 'update') {
            if (!isNegotiationUpdate(req.body)) return res.sendStatus(400)
            let token = req.get('Authorization')!.split(' ')[1]
            let requesterId = (await auth.getTokenOwner(token))!
            let negoUpdate = req.body as NegotiationUpdate
            let nego = await negotiations.findOne<Negotiation>({ id: negoUpdate.negotiation_id })
            if (!nego) return res.status(404).json({ message: "Negotiation thread not found" })
            if (requesterId !== nego.borrower_id || requesterId !== nego.lender_id) {
                return res.status(403).json({ message: "Not authorized to access resource" })
            }

            let prevOffer = nego.offers[nego.offers.length - 1]
            let reciever = prevOffer.author_id === requesterId ? prevOffer.reciever_id : prevOffer.author_id
            let new_offer: Offer = {
                author_id: requesterId!,
                reciever_id: reciever,
                timestamp: new Date(),
                amount: prevOffer.amount,
                intrest_rate: negoUpdate.update.field === 'interest_rate'
                    ? negoUpdate.update.new_value
                    : prevOffer.intrest_rate,
                tenure: negoUpdate.update.field === 'tenure'
                    ? negoUpdate.update.new_value
                    : prevOffer.tenure
            }

            nego.offers.push(new_offer)
            let updateResult = await negotiations.replaceOne({ id: negoUpdate.negotiation_id }, nego)
            if (!updateResult.acknowledged) {
                return res.send(500).json({ message: 'Error updating negotiation' })
            }
            res.status(200).json({ message: 'Successfully updated negotiations' })
        } else if (req.query.type === 'approve' || req.query.type === 'deny') {
            if (!req.query.id) return res.sendStatus(400)
            let token = req.get('Authorization')!.split(' ')[1]
            let requesterId = (await auth.getTokenOwner(token))!
            let nego = await negotiations.findOne<Negotiation>({ id: req.query.id })

            if (!nego) return res.status(404).json({ message: 'Negotiation with ID not found' })
            if (nego.lender_id != requesterId) {
                return res.status(403).json({ message: "No permission to approve/deny given negotiation" })
            }

            if (req.query.type === 'approve') {
                let res1 = await negotiations.updateOne({ id: req.query.id }, {
                    $set: {
                        status: 'approved'
                    }
                })
                let res2 = await listings.updateOne({ id: nego.listing_id }, {
                    $set: {
                        status: 'approved'
                    }
                })
                let res3 = await negotiations.updateMany({ listing_id: nego.listing_id }, {
                    $set: {
                        status: 'closed'
                    }
                })
                if (!res1.acknowledged || !res2.acknowledged || !res3.acknowledged) {
                    return res.status(500).json({ message: "Error updating negotiation" })
                }
                res.status(200).json({
                    message: "Accepted negotiation successfully",
                    listing_id: nego.listing_id,
                    offer: nego.offers[nego.offers.length - 1]
                })
            } else if (req.query.type === 'deny') {
                let res1 = await negotiations.updateOne({ id: req.query.id }, {
                    $set: {
                        status: 'denied'
                    }
                })
                if (!res1.acknowledged) {
                    return res.status(500).json({ message: "Error updating negotiation" })
                }
                res.status(200).json({
                    message: "Successfully denied load request and negotiation",
                    listing_id: nego.listing_id,
                    last_offer: nego.offers[nego.offers.length - 1]
                })
            }
        }
    })
    .post(async function (req, res) {
        if (!isNegotiationRequest(req.body)) return res.sendStatus(400)
        let negoReq = req.body as NegotiationRequest
        let token = req.get('Authorization')!.split(' ')[1]
        let requesterId = (await auth.getTokenOwner(token))!
        let listing = await listings.findOne<Listing>({ id: negoReq.listing_id })
        if (!listing) return res.status(400).json({ message: "Referenced listing does not exist" })
        if (requesterId === listing.author_id) {
            return res.status(403).json({ message: 'Cannot negotiate with yourself' }) // lol
        }
        let nego = await negotiations.find<Negotiation>({
            listing_id: listing.id,
            borrower_id: listing.author_id,
            lender_id: requesterId
        }).toArray()
        if (nego.length !== 0) {
            return res.status(400).json({ message: 'Negotiation already exists' })
        }

        let newOffer: Offer = {
            author_id: requesterId,
            reciever_id: listing.author_id,
            timestamp: new Date(),
            amount: listing.amount,
            tenure: negoReq.update.field === 'tenure' ? negoReq.update.new_value : listing.tenure,
            intrest_rate: negoReq.update.field === 'interest_rate' ? negoReq.update.new_value : listing.interest
        }

        let listingOffer: Offer = {
            author_id: listing.author_id,
            reciever_id: requesterId,
            timestamp: listing.timestamp,
            amount: listing.amount,
            tenure: listing.tenure,
            intrest_rate: listing.interest
        }

        let newNegotiationID = uuidv4()
        let newNegotiation: Negotiation = {
            id: newNegotiationID,
            listing_id: negoReq.listing_id,
            status: 'approved',
            borrower_id: listing.author_id,
            lender_id: requesterId,
            offers: [newOffer, listingOffer]
        }

        let _listingResult = await listings.insertOne(newNegotiation)
        if (!_listingResult.acknowledged) {
            return res.status(500).json({ message: "Error creating negotiation" })
        }

        res.status(201).json({
            id: newNegotiationID,
            message: "Successfully created negotiation"
        })
    })
