
const Post = require('../models/postSchema.js');

// Create and save a new post this is called by initialize script
async function createPost(postID, volCodeArray, durCodeArray, adminCode) {

  try{
    //we need to check to see if the existing post already exist in the db
    const existingPost = await Post.findOne({postId : postID});
    if(existingPost){
      console.log(`Post with PostID:${postID} already exist, please initiate with a different post number`)
      return;
    }

    
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
    }
}
// we are  now saving this post inside of the app.js file now 

module.exports = createPost;