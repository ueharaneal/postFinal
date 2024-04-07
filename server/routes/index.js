const express = require("express")
const router = express.Router()

const authRoute = require("./auth.route")
const userRoute = require("./user.route")
const postDataRoute = require("./postdata.route")

const routesIndex = [
	{
		path: "/auth",
		route: authRoute,
	},
	{
		path: "/users",
		route: userRoute,
	},
	{
		path: "/postdata",
		route: postDataRoute,
	},
]

routesIndex.forEach(route => {
	router.use(route.path, route.route)
})

module.exports = router
