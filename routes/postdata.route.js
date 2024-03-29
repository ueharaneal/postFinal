const express = require("express")
const router = express.Router()

const postDataController = require("../controllers/postData.controller")

router.use("/", (req, res, next) => {
	
	next();
})

router.post("/getAccessCodes/postId",auth(), postDataController.getAcessCodes)

//get post index
//router.get('/selectedPost/, getPostPassword) ()

module.exports = router
