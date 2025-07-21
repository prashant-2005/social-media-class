import postModel from "../models/post.model.js";
import uploadImage from "../services/storage.services.js";
import { v4 as uuidv4 } from "uuid";

export async function createPost(req, res) {
  const { mentions } = req.body;

  // const file = await uploadFile(req.file,uuidv4()) /4s
  // const caption = await generateCaption(req.file)  /10s

  const [file, caption] = await Promise.all([
    uploadFile(req.file, uuidv4()), // 4s
    generateCaption(req.file), // 10s
  ]);

  console.log(req.user);
  
}
