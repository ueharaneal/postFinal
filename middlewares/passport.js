const { User } = require("../models/user")
require("dotenv").config()

const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt")

jwtOptions = {
	secretOrKey: process.env.DB_SECRET,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

const jwtVerify = async () => {}

const jwtStrategy = new Strategy()
