import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import postRoutes from './routes/post.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use("/auth",authRoutes)
app.use("/posts",postRoutes)



export default app