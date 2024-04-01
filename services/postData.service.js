const { Post } = require('../models/postSchema')


const retrievePostNames = async() =>{
    try{
        if (!Post) {
            console.error("Failed to import Post model");
        } else {
            console.log("Post model imported successfully");
        }
        //retrieve all of the post 
        const allPost = await Post.find({})
        //map through to only return the names 
        console.log(allPost)
        return allPost
        
    }catch(error){
        console.error("Error fetching post names:", error);
        throw error
    }
}

const generateAccessCodes = (body) =>{
    try{
        //we first need to find the post id and iterate throught the code increasing the given index
        //return the code's index and add it with the volume index then return the code 
        
    }catch(error){throw error}
}

module.exports = {
    retrievePostNames,
    generateAccessCodes,
}