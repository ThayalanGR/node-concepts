const express = require('express')
const app = express()
app.get("/",  (req, res) => {
    res.send("hello world!")
})

app.listen(process.env.port || 3000, (error) => {
    console.log("started")
    if(error) {
        console.log("error")
    }
})