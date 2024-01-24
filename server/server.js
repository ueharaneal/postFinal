const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 3002
const router = require("../routes/router.js")
const connectDb = require('../models/db.js')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
	origin: "*",
	credentials: true,
	optionsSuccessState: 200,
}

connectDb();

app.use(cors(corsOptions))

//open database connection when application starts


app.use("/", router)

app.listen(port, () => {
	console.log(`App is listening on port ${port}`)
})
