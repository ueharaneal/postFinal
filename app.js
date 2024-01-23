require("dotenv").config()
const connectDB = require("./models/db.js")
const initializeScript = require("./initializeFolder/initializeScript.js")
connectDB()

initializeScript(5, "laguna beach")

//calling each indivual element

//choose post number

//create a middleware that translate user dur into a specific array.
