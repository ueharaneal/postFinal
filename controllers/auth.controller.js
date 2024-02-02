const { authService } = require("../services")
const httpStatus = require("http-status")
const { User } = require("../models/users")

const authController = {
	async register(req, res, next) {
		try {
			const { email, password } = req.body
			const user = await authService.createUser(email, password)
			//creating a token
			const token = await genAuthToken(user)
			res.cookie("x-access-token", token).status(httpStatus.CREATED).send({
				user,
				token,
			})
		} catch (error) {
			res.status(httpStatus.BAD_GATEWAY).send(error.message)
		}
	},
}

module.exports = authController
