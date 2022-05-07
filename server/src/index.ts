import express, { Application } from 'express'
import dotenv from 'dotenv'
import { listingRouter } from './routes/listing'

dotenv.config()

const app: Application = express()

// MIDDLEWARE?
// cors
// body-parser
// cookie-parser

app.use('/listing', listingRouter)

app.listen(process.env.PORT, function () {
  console.log(`Server started on ${process.env.PORT}`)
});
