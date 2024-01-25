const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { hashPasswords } = require("../utils/passwordUtils");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  firstname: {
    type: String,
    trim: true,
    maxLength: 100,
  },
  lastname: {
    type: String,
    trim: true,
    maxLength: 100,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// we will create a pre. middleware through mongoose to hash the password before we save it
userSchema.pre("save", async function (next) {
  try {
    var user = this;
    user.password = await hashPasswords(user.password);
    next();
  } catch (error) {
    throw error;
  }
});
//models to compare candidatePassword and user.password
userSchema.methods.comparePasswords = function (candidatePassword, callback) {
  //candidate password = req.body.password
  var user = this;
  bcrypt.compare(candidatePassword, user.password, function (error, isMatched) {
    //the callback will allow us to exit out of the function
    if (error) {
      return callback(error);
    }
    callback(null, isMatched);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
