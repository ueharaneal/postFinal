const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.send("this app is working")
})

router.get("/register", (req, res) => {})

router.get("postdata", (res, req) => {
	postData = [
		{
			postId: "0001",
		},
		{
			postId: "0002",
		},
	]
	res.send(postData)
})

module.exports = router
