import express from 'express'
import {loginUser, registerUser} from '../controllers/auth.controller.js'
import { registerValidator } from '../middleware/validator.middleware.js'


const router = express.Router()
router.post("/register",registerValidator,registerUser)
router.post("/login",loginUser)



export default router