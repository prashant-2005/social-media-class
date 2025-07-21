import { createUser, findOneUser } from "../dao/user.dao.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from "../config/config.js";

export async function registerUser(req,res) {
    
    const {username,email,password} = req.body;

    const isUserExists = await findOneUser({
        $or:[{username},{email}]
    })

    if(isUserExists){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await createUser({
        username,
        email,
        password:hashedPassword
    })

    const token = jwt.sign({_id:user._id},config.secretKey);

    res.cookie('token',token)

    return res.status(201).json({
        message:"user register successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            bio:user.bio,
            image:user.image,
        }
    })
}


export async function loginUser(req,res){
    
    const {username,email,password} = req.body;

    const user = await findOneUser({
        $or:[{username},{email}]
    })

    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({_id:user._id},config.secretKey);

    res.cookie("token",token)

    return res.status(200).json({
        message:"user logged in successfully",
        user:{
            _id:user._id,
            username:user.username,
            email:user.email,
            bio:user.bio,
            image:user.image
        }
    })



}