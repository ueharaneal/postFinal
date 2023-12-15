require('dotenv').config();

const mongoose = require('mongoose');
const Post = require('../models/postSchema.js');

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
console.log("MongoDB URI:", uri);

mongoose.connect(uri).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Create and save a new post
async function createPost(postID, volCodeArray, durCodeArray, adminCode) {
    try {
        const newPost = new Post({
            postId: postID,
            volCodeArray: volCodeArray,
            volCodeIndex: 0,
            durCodeArray: durCodeArray,
            durCodeIndex: 0,
            adminCode: adminCode,
        });

        await newPost.save();
        console.log("Post saved successfully");
    } catch (error) {
        console.error("Error saving the post:", error);
    } finally {
        mongoose.connection.close();
    }
}

module.exports = createPost;