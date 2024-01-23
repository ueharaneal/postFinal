
const Post = require('../models/postSchema.js');

// Create and save a new post this is called by initialize script
async function createPost(postID, postName, volCodeArray, durCodeArray, adminCode) {

  try{
    //we need to check to see if the existing post already exist in the db
    const existingPost = await Post.findOne({postId : postID});
    if(existingPost){
      console.log(`Post with PostID:${postID} already exist, please initiate with a different post number`)
      return;
    }

    
        const newPost = new Post({
            postId: postID,
            postName: postName,
            volCodeArray: volCodeArray,
            volCodeIndexZero: 0,
            volCodeIndexOne: 0,
            volCodeIndexTwo: 0,
            volCodeIndexThree: 0,
            durCodeArray: durCodeArray,
            durCodeIndexZero: 0,
            durCodeIndexOne: 0,
            durCodeIndexTwo: 0,
            durCodeIndexThree: 0,
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