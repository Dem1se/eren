import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { DBClient } from '../database'
import { Listing } from '../datamodels'
import * as typeguards from '../typeguards'
import * as auth from './auth'

export const listingRouter = Router()
const dbConnect = new DBClient()
const listings = dbConnect.getDb().collection('listings')

listingRouter.route('/')
  .all(async function (req, res, next) {
    let authHead = req.get('Authorization');
    
    // make sure auth header is present
    if (!authHead) return res.status(401).json({ message: "Authorization headers not set"}).redirect(303, process.env.LOGIN_PAGE!)
    
    // make sure the right auth scheme is used
    if (authHead.split(" ")[0] != 'Bearer') return res.status(401).json({ message: "Incorrect authorization scheme"})
    
    // make sure the token is generally valid.
    // specfic resource permissions should be checked within specific #METHOD handlers (below)
    let isValidToken = await auth.validateToken(authHead.split(" ")[1])
    if (!isValidToken) return res.status(401).json({ message: "Invalid token"})
    next()
  })
  .get(async function (req, res) {
    if (req.query.id) { // return single listing
      let result = await listings.find<Listing>({
        id: req.query.id
      }).toArray()

      if (result.length > 1) {
        console.error(`More than one listing with the same id! id: ${req.query.id}`)
        return res.sendStatus(500)
      }

      res.status(200).json(result[0])
    } else {
      let results = await listings.find<Listing>({}).limit(20).toArray()
      res.status(200).json(results)
    }
  })
  .delete(async function (req, res) {
    if (!req.query.id) {
      return res.sendStatus(400)
    }
    
    let authHead = req.get('Authorization')!
    let token = authHead.split(" ")[1]
    let tokenOwner = await auth.getTokenOwner(token)
    let listing = await listings.findOne<Listing>({ id: req.query.id })
    if (!listing) return res.status(400).json({ message: "Listing not found" })
    if (listing.author_id !== tokenOwner) {
      return res.status(403).json({ message: "No permission to delete listing"})
    }
    let _deleteResult = await listings.deleteOne({ id: req.query.id })
    res.sendStatus(200)
  })
  // NOT SUPPORTING THE AUTHOR UPDATING BORROW LISTINGS
  // .post(function (req, res) {
  //   if (req.query.id) {
  //   } else {
  //     res.sendStatus(400)
  //   }
  // })

listingRouter.post('/new', async function (req, res) {
  if (!typeguards.isListingRequest(req.body)) {
    return res.sendStatus(400)
  }

  let token = req.get('Authorization')!.split(" ")[1]
  let tokenOwner = await auth.getTokenOwner(token)
  if (tokenOwner !== req.body.author_id) return res.status(403).json({ 
    message: "Wrong user ID provided in listing"
  })

  let listId = uuidv4();
  let doc: Listing = {
    id: listId,
    author_id: req.body.author_id,
    timestamp: new Date(),
    status: 'active',
    amount: req.body.amount,
    tenure: req.body.tenure,
    interest: req.body.interest_rate
  }
  let _insertResult = await listings.insertOne(doc)
  res.status(201).json({ id: listId })
})
