const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { hashPasswords } = require("../utils/passwordUtils");
const validator = require("validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

//check to see if the email exist
userSchema.statics.isEmailTaken = async function (email) {
  const user = await this.findOne({ email });
  return !!user;
};

//generate auth token for new user
userSchema.methods.generateAuthToken = async function () {
  const userObj = { sub: this._id.toHexString(), email: this.email };
  const token = jwt.sign(userObj, process.env.DB_SECRET, { expiresIn: "1d" });
  return token;
};

// we will create a pre. middleware through mongoose to hash the password before we save it
userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      console.log(this.password);
      //becuase password is modified we can hash it
      const hashedPassword = await hashPasswords(this.password);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    throw error;
  }
});
//models to compare candidatePassword and user.password
userSchema.methods.comparePasswords = async function (candidatePassword) {
  const user = this;
  const match = await bcrypt.compare(candidatePassword, user.password);
  return match;
};
const User = mongoose.model("User", userSchema);

module.exports = { User };
