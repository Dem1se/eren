import { Router } from 'express'

export const listingRouter = Router()

listingRouter.get('/', function (req, res) {
  res.status(200).send({ message: 'All Ok!' })
})

listingRouter.get('/:id', function (req, res) {
  res.status(200).send({ id: req.params.id, message: "recieved req" })
})
