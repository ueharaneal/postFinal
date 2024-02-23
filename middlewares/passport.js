const { User } = require("../models/user")
require("dotenv").config()

const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt")

jwtOptions = {
	secretOrKey: process.env.DB_SECRET,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}
//function to verify that we have an existing token
const jwtVerify = async () => {}

const jwtStrategy = new Strategy()
