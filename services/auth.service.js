const httpStatus = require("http-status");

const { User } = require("../models/users");
const userService = require("./user.service");

const createUser = async (email, password) => {
  try {
    if (await User.isEmailTaken(email)) {
      throw new Error("sorry email is taken");
    }
    const user = new User({ email: email, password: password });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const genAuthToken = async (user) => {
  const token = user.generateAuthToken();
  return token;
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    //check if email exist
    const user = await userService.findUserByEmail(email);
    if (!user) {
      throw new Error("User by email does not exist");
    }
    //validate password
    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      throw new Error("Passwords do not match");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  genAuthToken,
  signInWithEmailAndPassword,
};
