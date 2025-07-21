import imagekit from 'imagekit'
import config from '../config/config.js'

var Imagekit = new imagekit({
    publicKey:config.publicKey,
    privateKey:config.privateKey,
    urlEndpoint:config.endpointUrl
})

const uploadImage = async (req,res) =>{
    try {
        const file = req.file;

        const result = await Imagekit.upload({
            file:file.buffer,
            fileName:file.orginalname
        })

        return res.status(201).json({
            message:"Uploaded successfully to Imagekit",
            url:result.url,
        })

    } catch (error) {
        console.log("uploaded failed");
        res.status(400).json({error:"upload failed"})
    }
}

export default uploadImage  