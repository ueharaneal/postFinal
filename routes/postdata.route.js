const express = require("express")
const router = express.Router()

const postDataController = require("../controllers/postData.controller")

router.use("/", (req, res, next) => {
	res.send("<h1> post data works </h1>")
})

router.post("/selectPost", postDataController.selectPost)

module.exports = router
