const express = require("express")
const router = express.Router()

const posts = require("../models/postSchema")

router.get("/", (req, res) => {
	res.send("this app is working")
})

router.get("/register", (req, res) => {
	res.send("hellow")
})

//to get all post data
router.get("/postdata", async(req, res) => {
	try {
		const allPosts = await posts.find(); // Use Mongoose to find all posts in the database
		res.json(allPosts); // Send the retrieved data as JSON response

	  } catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	  }
})

module.exports = router
