//this function will hash the user's password

const bcrypt = require("bcrypt")
const saltRounds = 10

//hashPasswords will be used when a user creates an account
const hashPasswords = async password => {
	try {
		const salt = await bcrypt.genSalt(saltRounds)
		const hash = await bcrypt.hash(password, salt)
		return hash
	} catch (error) {
		console.error("Error when hashing password", error)
		throw error
	}
}

//comparePasswords will be used when a user
const comparePasswords = async (password, hash) => {
	try {
		return await bcrypt.compare(password, hash)
	} catch (error) {
		console.error("There was an error compare passwords", error)
		throw error
	}
}

module.exports = {
	hashPasswords,
	comparePasswords,
}
