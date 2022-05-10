import { Router } from 'express'
import multer from 'multer'
import * as auth from './auth'
import { Bucket, Storage } from '@google-cloud/storage'

const gcs = new Storage({ keyFilename: './server/gcs-key.json' })
const staticBucket = gcs.bucket('yeager-static-13')
const privBucket = gcs.bucket('yeager-priv-13')

const store = multer.memoryStorage()
const mult = multer({
    storage: store,
    // dest: 'uploads/', // debug statement
    fileFilter: function (req, file, cb) {
        cb(null, true) // TODO check for file format
    },
    limits: { fileSize: 5000 }
})

const uploads = mult.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'aadhar', maxCount: 1 },
    { name: 'pan', maxCount: 1 },
    { name: 'salary_slips', maxCount: 5 },
    { name: 'aadhar_number', maxCount: 1 }, // text fields from here
    { name: 'pan_number', maxCount: 1 },
    { name: 'bank_neft', maxCount: 1 },
    { name: 'bank_acct', maxCount: 1 },
    { name: 'ctc', maxCount: 1 }
])

export const uploadRouter = Router()

uploadRouter.route('/')
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
    .post(async function (req, res) {
        uploads(req, res, async function (err) {
            if (err) {
                if (err instanceof multer.MulterError) {
                    return res.status(413).json({ messsage: "File too large. 5MB limit." })
                } else {
                    console.error(err)
                }
            }
            let token = req.get('Authorization')!.split(' ')[1]
            let requesterId = (await auth.getTokenOwner(token))!
            const privFields = ['aadhar', 'pan', 'salary_slips']
            const pubFields = ['avatar']
            if (req.files) {

                /*
                {
                    fieldName1: [ f1: File, f2: File ],
                    fieldName2: [ f1: File, f2: File, f3: File ]
                }
                */
                Object.values(req.files).forEach(async function (fileArray: Array<Express.Multer.File>, i, a) {
                    fileArray.forEach(async function (file, index, array) {
                        let fileName = `${requesterId}:${file.fieldname}`
                        if (file.fieldname === 'salary_slips') fileName += `-${index}`
                        let fileNameFull = `${fileName}.${file.mimetype.split("/")[1]}`

                        let bucket: Bucket;
                        if (privFields.includes(file.fieldname)) {
                            bucket = privBucket
                        } else {
                            bucket = staticBucket
                        }

                        await bucket
                            .file(fileName)
                            .save(file.buffer)
                            .catch((err) => {
                                console.log("Error uploading file")
                                console.log(err)
                            })

                        // TODO save the URI of the file to DB
                    })
                })
            }

            if (req.body) {
                const textFields = ['aadhar_number', 'pan_number', 'bank_neft', 'bank_acct', 'ctc']
                for (const [key, val] of Object.entries(req.body)) {
                    // TODO handle the text fields. (Save them to DB)
                }
            }
            res.sendStatus(201)
        })
    })
