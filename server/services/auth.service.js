const httpStatus = require("http-status")
const { User } = require("../models/users")
const userService = require("./user.service")
const { ApiError } = require("../middlewares/apiError")

const createUser = async (firstName, lastName, email, password) => {
	try {
		if (await User.isEmailTaken(email)) {
			throw new ApiError(httpStatus.BAD_REQUEST, "Sorry email taken")
		}
		const user = new User({
			firstName,
			lastName,
			email,
			password,
		})
		
		await user.save()
		return user
	} catch (error) {
		throw error
	}
}

const genAuthToken = (user) => {
	const token = user.generateAuthToken()
	return token
}

const signInWithEmailAndPassword = async (email, password) => {
	try {
		const user = await userService.findUserByEmail(email)
		if (!user) {
			throw new ApiError(httpStatus.BAD_REQUEST, "Sorry BAD email")
		}
		/// validate password
		if (!(await user.comparePasswords(password))) {
			throw new ApiError(httpStatus.BAD_REQUEST, "Sorry BAD password")
		}
		return user
	} catch (error) {
		throw error
	}
}

module.exports = {
	createUser,
	genAuthToken,
	signInWithEmailAndPassword,
}
