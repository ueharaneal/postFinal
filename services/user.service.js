const { User } = require("../models/users");

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const getUsersNames = async () => {
  try {
    // Retrieve all users but only select firstname and lastname
    const users = await User.find({}, 'firstName lastName');
    // Map through the users to extract names
    const names = users.map(user => {
      return { id: user._id.toString(), firstName: user.firstName, lastName: user.lastName };
    });
    return names;
  } catch (error) {
    console.error("Error fetching names:", error);
    throw error; // Or handle the error as you see fit
  }
};

const getUser = async(id) =>{
  try{
    return await User.findById(id)
  }catch(error){
    console.error("Error fetching user:", error);
    throw error
  }
}

module.exports = {
  findUserByEmail,
  getUsersNames,
  getUser
};
