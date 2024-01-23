const express = require('express')
require('dotenv').config()
const bodyParser = require("body-parser")
const cors = require('cors')


const app = express()
const port = process.env.PORT || 3002

app.use(cors())
app.use(bodyParser.json())

app.use(routes,)

app.get('/',(req,res)=>{
    res.send("this app is working")
})


app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})