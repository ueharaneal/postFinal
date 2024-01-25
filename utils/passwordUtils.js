//this function will hash the user's password

const bcrypt = require("bcrypt")


//hashPasswords will be used when a user creates an account
const hashPasswords = async password => {
	const saltRounds = 10
	try {
		const salt = await bcrypt.genSalt(saltRounds)
		const hash = await bcrypt.hash(password, salt)
		return hash
	} catch (error) {
		console.error("Error when hashing password", error)
		throw error
	}
}




module.exports = {
	hashPasswords,

}
//sending this to user.js (userSchema file)