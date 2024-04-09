const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

//middleware
const auth = require("../middlewares/auth");


//registering a user
router.post("/register", authController.register);

router.post("/signin", authController.signin);

router.get("/isauth", auth(), authController.isauth);

module.exports = router;
