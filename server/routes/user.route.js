const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller.js')
router.get("/", (req, res) => {
  res.send("Hello from user route!");
});

//route to retrive all users first and last name
router.get("/getusersnames", userController.getUsersNames);

//rooute to retrieve all of a single users data 
router.post('/getuser', userController.getUser)

module.exports = router;
