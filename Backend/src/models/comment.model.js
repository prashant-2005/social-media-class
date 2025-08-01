import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'posts',
        required:true
    },
    text:{
        type:String,
        required:true,
    },
})

const commentModel = mongoose.model('comments',commentSchema);

export default commentModel