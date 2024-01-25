const express = require("express");
const router = express.Router();

const posts = require("../models/postSchema");
const { User } = require("../models/users");
const { MongoError } = require("mongodb");

router.get("/", (req, res) => {
  res.send("this app is working");
});

//Users routes
router.post("/user/register", async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    let doc = await user.save();
    res.status(200).send(doc);
  } catch (error) {
    res.status(400).send(error);
  }
  next();
});

//User login route
router.post("/user/login", async (req, res, next) => {
  try {
    //query for email in User model
    let userCandidate = await User.findOne({
      email: req.body.email,
    });
    //if the user does not exist it will return undefined
    if (!userCandidate) {
		throw new Error("User does not exist");
    }

    userCandidate.comparePasswords(req.body.password, (error, isMatch) => {
      if (error) throw new Error("Bad password");
      if (isMatch) {
        res.status(200).send(isMatch);
      }
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//Post Routes
//to get all post data
router.get("/api/postdata", async (req, res) => {
  try {
    const allPosts = await posts.find(); // Use Mongoose to find all posts in the database
    res.json(allPosts); // Send the retrieved data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
