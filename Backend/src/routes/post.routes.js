import express from 'express'
import { authMiddleware } from '../middleware/auth.middleware.js'
import upload from '../middleware/multer.middleware.js'
import { createPostController,getPostController } from '../controllers/post.controller.js'
import { createCommentValidator, getPostsValidator } from '../middleware/validator.middleware.js'


const router = express.Router()

router.post("/",authMiddleware,upload.single('image'),createPostController);

router.get("/",getPostsValidator,authMiddleware,getPostController)

router.post("/comment",createCommentValidator,authMiddleware)

export default router