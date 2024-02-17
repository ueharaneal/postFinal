const { User } = require("../models/users");

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUsersNames = async () => {
  try {
    // Retrieve all users but only select firstname and lastname
    const users = await User.find({}, 'firstname lastname');
    // Map through the users to extract names
    const names = users.map(user => {
      return { firstname: user.firstname, lastname: user.lastname };
    });
    return names;
  } catch (error) {
    console.error("Error fetching names:", error);
    throw error; // Or handle the error as you see fit
  }
};

module.exports = {
  findUserByEmail,
  getUsersNames,
};
