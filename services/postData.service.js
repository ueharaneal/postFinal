const { Post } = require('../models/postSchema')


const  retrievePostNames = async() =>{
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

module.exports = {
    retrievePostNames
}