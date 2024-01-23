const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require("../routes/router.js")

const app = express()
const port = process.env.PORT || 3002

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(routes,)

const corsOptions = {
	origin: "*",
	credentials: true,
	optionsSuccessState: 200,
}
app.use(cors(corsOptions))

app.use("/", router)

app.listen(port, () => {
	console.log(`App is listening on port ${port}`)
})



app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})

