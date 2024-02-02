const express = require("express")
const router = express.Router()

const authController = require("../controllers/auth.controller")

router.get("/", (req, res) => {
	console.log("GET request to /auth")
	res.send("<h1>It works! </h1>")
})

//registering a user
router.post("/register", authController.register)

module.exports = router
