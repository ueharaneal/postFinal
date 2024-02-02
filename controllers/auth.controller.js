const { authService } = require("../services")
const httpStatus = require("http-status")
const { User } = require("../models/users")

const authController = {
	async register(req, res, next) {
		try {
			const { email, password } = req.body
			const user = authSevices.createUser()
		} catch (error) {
			///
		}
	},
}

module.exports = authController
