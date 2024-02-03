const { User } = require("../models/users");

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  findUserByEmail,
};
