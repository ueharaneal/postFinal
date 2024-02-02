const httpStatus = require("http-status")

const User = require("../models/users")

const createUser = async (email, password) => {
	try {
		if (await User.emailIsTaken(email)) {
			throw new Error("sorry email is taken")
		}
		const user = new User({ email: email, password: password })
		await user.save()
		return user
	} catch (error) {
		throw error
	}
}

const genAuthToken = async user => {
	const token = user.generateAuthToken()
	return token
}

module.exports = {
	createUser,
	genAuthToken,
}
