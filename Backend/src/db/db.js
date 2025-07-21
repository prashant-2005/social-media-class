import mongoose from "mongoose";
import config from "../config/config.js";

function connectDB(){
    mongoose.connect(config.mongodbURL).then(()=>{
        console.log("Connect to DB");
    }).catch((err)=>{
        console.log(err);
    })
}


export default connectDB