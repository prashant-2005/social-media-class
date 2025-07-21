import dotenv from 'dotenv'
dotenv.config()


const config = {
    mongodbURL:process.env.MONGO_URL,
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    endpointUrl:process.env.IMAGEKIT_URL_ENDPOINT,
    secretKey:process.env.JWT_SECRETKEY,
    geminiApiKey:process.env.GEMINI_API_KEY,
}

export default config