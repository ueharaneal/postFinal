const express = require("express")
const router = express.Router()

const postDataController = require("../controllers/postData.controller")

router.use("/", (req, res, next) => {
	
	next();
})

//requires. postID and duration choice
router.post("/getAccessCodes/postId", postDataController.getAccessCodes)

//get post index
//router.get('/selectedPost/, getPostPassword) ()

module.exports = router
