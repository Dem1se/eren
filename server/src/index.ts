import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express, { Application } from 'express'

dotenv.config({ path: './server/.env' }) // CWD: server/..

import { listingRouter } from './routes/listing'

const app: Application = express()

app.use(express.json())
app.use(cookieParser())
// cors?

app.use('/listing', listingRouter)

app.listen(process.env.PORT || 3555, function () {
  console.log(`Server started on ${process.env.PORT}`)
});
