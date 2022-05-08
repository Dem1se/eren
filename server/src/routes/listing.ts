import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { DBClient } from '../database'
import { Listing } from '../datamodels'
import * as typeguards from '../typeguards'

export const listingRouter = Router()
const dbConnect = new DBClient()
const listing = dbConnect.getDb().collection('listings')

// TODO: Authorization for EVERYTHING
listingRouter.route('/')
  .all(function (req, res, next) {
    // do the common auth
    next()
  })
  .get(async function (req, res) {
    if (req.query.id) { // return single listing
      let result = await listing.find<Listing>({
        id: req.query.id
      }).toArray()

      if (result.length > 1) {
        console.error(`More than one listing with the same id! id: ${req.query.id}`)
        return res.sendStatus(500)
      }

      res.status(200).json(result[0])
    } else {
      let results = await listing.find<Listing>({}).limit(20).toArray()
      res.status(200).json(results)
    }
  })
  // NOT SUPPORTING THE AUTHOR UPDATING BORROW LISTINGS
  // .post(function (req, res) {
  //   if (req.query.id) {
  //   } else {
  //     res.sendStatus(400)
  //   }
  // })
  .delete(async function (req, res) {
    // TODO: auth
    if (!req.query.id) {
      return res.sendStatus(400)
    }
    let _deleteResult = await listing.deleteOne({ id: req.query.id })
    res.sendStatus(200)
  })

listingRouter.post('/new', async function (req, res) {
  // TODO: auth
  if (!typeguards.isListingRequest(req.body)) {
    return res.sendStatus(400)
  }

  let listId = uuidv4();
  let doc: Listing = {
    id: listId,
    author_id: req.body.author_id, // needs to be validated against auth/headers
    timestamp: new Date(),
    status: 'active',
    amount: req.body.amount,
    tenure: req.body.tenure,
    interest: req.body.interest_rate
  }
  let _insertResult = await listing.insertOne(doc)
  res.status(201).json({ id: listId })
})
