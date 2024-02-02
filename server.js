const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const httpStatus = require("http-status")
const { xss } = require("express-xss-sanitizer")
const mongoSanitize = require("express-mongo-sanitize")

const app = express()
const port = process.env.PORT || 3001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require("./routes/index.js")
const connectDb = require("./models/db.js")

const corsOptions = {
	origin: "*",
	credentials: true,
	optionsSuccessState: 200,
}

connectDb()

app.use(cors(corsOptions))

//Sanitize
app.use(mongoSanitize)
app.use(xss())

//open database connection when application starts

app.use("/api", routes)

app.listen(port, () => {
	console.log(`App is listening on port ${port}`)
})
