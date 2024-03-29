const { authService } = require("../services")
const httpStatus = require("http-status")

const authController = {
	async register(req, res, next) {
		try {
			const { firstName, lastName, email, password, terms} = req.body
			const user = await authService.createUser(firstName, lastName, email, password, terms)
			const token = await authService.genAuthToken(user)

			/// SEND VERIFICATION EMAIL

			res.cookie("x-access-token", token).status(httpStatus.CREATED).send({
				user,
				token,
			})
			console.log("User succefully created")
		} catch (error) {
			next(error)
		}
	},
	async signin(req, res, next) {
		try {
			const { email, password } = req.body
			const user = await authService.signInWithEmailAndPassword(
				email,
				password
			)
			const token = await authService.genAuthToken(user)

			res.cookie("x-access-token", token).send({ user, token })
		} catch (error) {
			next(error)
		}
	},
	async isauth(req, res, next) {
		try {
			res.send("ok")
		} catch (error) {
			res.error(error)
		}
	},
}

module.exports = authController
