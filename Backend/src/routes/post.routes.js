import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import upload from '../middleware/multer.middleware.js'
import { createPost } from '../controllers/post.controller.js'

const router = express.Router()

router.post("/posts",authMiddleware,upload.single('image'),createPost)

export default router