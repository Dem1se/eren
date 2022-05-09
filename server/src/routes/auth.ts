import * as bcrypt from 'bcrypt';
import { Router } from "express";
import fs from 'fs/promises';
import * as jwt from 'jsonwebtoken';
import { DBClient } from "../database";
import { Login, Token, TokenPayload } from "../datamodels";
// import { isLoginRequest } from "../typeguards"

export const authRouter = Router()
const dbConnect = new DBClient()
const logins = dbConnect.getDb().collection('logins')
const tokens = dbConnect.getDb().collection('tokens')

// not sanitizing these inputs enough...
authRouter.post('/login', async function (req, res) {
    if (!req.get('Authorization')) { // need to further validate the header
        return res.sendStatus(400)
    }
    let authHeader = req.get('Authorization')!
    let authHeadText = Buffer.from(authHeader.split(" ")[1], 'base64').toString('utf-8')
    const email = authHeadText.split(":")[0]
    const pass = authHeadText.split(":")[1]
    let login = (await logins.findOne<Login>({ email: email }))
    if (!login) {
        return res.status(403).json({ message: "Unable to find account" })
    }

    if (!process.env.SALT_ROUNDS) {
        console.error("SALT_ROUNDS not in .env! Defaulting to 10.")
    }
    // OR b/w parseInt err result and 10 might not work properly
    const secret = await bcrypt.hash(pass, parseInt(process.env.SALT_ROUNDS!) || 10)
    const loginSuccess = await bcrypt.compare(pass, secret)

    if (loginSuccess) {
        let payload: TokenPayload = {
            sub: login.id,
            iss: "yeager"
        }
        let pk = await fs.readFile('./server/ec-secp256k1-priv-key.pem')
        let newToken = jwt.sign(payload, pk, { algorithm: 'ES256' })
        await tokens.insertOne({ user_id: login.id, token: newToken } as Token)
        res.cookie('token', newToken, { secure: true, httpOnly: true })
        if (!process.env.HOMEPAGE) {
            console.error("HOMEPAGE not in .env!")
        }
        return res.redirect(303, process.env.HOMEPAGE!)
    } else {
        return res.status(403).json({ message: "Incorrect email or password. Try again." })
    }
})

authRouter.post('/signup', async function (req, res) {

})

export async function validateToken(token: string /*, user_id: string*/) {
    let tokenStored = await tokens.findOne({ token: token })
    if (!tokenStored) {
        return false
    } else {
        let pubkey = await fs.readFile('./server/ec-secp256k1-pub-key.pem')
        try {
            let _payload = jwt.verify(token, pubkey, { algorithms: ['ES256'], issuer: 'yeager' }) as any
            return true
        } catch (err) {
            return false
        }
    }
}

export async function getTokenOwner(token: string): Promise<string | undefined> {
    let owner = await tokens.findOne<Token>({ token: token })
    return owner?.user_id
}
