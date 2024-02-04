const bcrypt = require("bcrypt");

const hashPasswords = async (password) => {
  const saltRounds = 10; // Number of salt rounds
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  hashPasswords,
};
