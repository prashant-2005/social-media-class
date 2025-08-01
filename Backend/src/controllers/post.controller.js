import { createPost, getPosts } from "../dao/post.doa.js";
import postModel from "../models/post.model.js";
import uploadImage from "../services/storage.services.js";
import { v4 as uuidv4 } from "uuid";

export async function createPostController(req, res) {
  const { mentions } = req.body;

  // const file = await uploadFile(req.file,uuidv4()) /4s
  // const caption = await generateCaption(req.file)  /10s

  const [file, caption] = await Promise.all([
    uploadFile(req.file, uuidv4()), // 4s
    generateCaption(req.file), // 10s
  ]);

  const post = await createPost({
    mentions,
    url:file.url,
    caption,
    user:req.user._id
  })

  res.status(201).json({
    message:"Post created successfully",
    post
  })
  
}


export async function getPostController(req,res) {
  // req.query.limit && req.query.limit > 20 ? 20 : req.query.limit
  const posts = await getPosts(req.query.skip,Math.min(req.query.limit,20))

  return res.status(200).json({
    message: "postsfetch successfully",
    posts
  })

}



export async function createCommentController(req,res) {
  const {post,text} = req.body 
  const user = req.user
  

}