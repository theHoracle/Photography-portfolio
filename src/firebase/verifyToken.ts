import admin from "firebase-admin"
import { cert } from "firebase-admin/app"

const serviceAccount = JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT!, 'base64').toString('utf8'));

if(!admin.apps.length) {
    admin.initializeApp({
        credential: cert(serviceAccount)
    })
}

const verifyToken = async (idToken: string) => {
    try {
        const decodeToken = await admin.auth().verifyIdToken(idToken)
        if(!decodeToken) throw new Error("Invalid token")
        return decodeToken
    } catch (error) {
        console.log(error)
        return null
    }
}

export { verifyToken }