require("dotenv").config()
const connectDB = require("../models/db")
const initializeScript = require("../initializeFolder/initializeScript")
connectDB()

initializeScript(3)

//calling each indivual element

//choose post number

//create a middleware that translate user dur into a specific array.
