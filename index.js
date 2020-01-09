const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config

//note: heroku wont always use port 5000 - as specfied below, heroku will reference the env else 5000
const PORT = process.env.port || 5000

const app = express()

const DB_URL = "mongodb://localhost:27017/lasagne-app-db"
// TODO connect with my index.js file in my routes dir
const dbConfig = {useNewUrlParser: true, useUnifiedTopology: true}


mongoose.connect(DB_URL, dbConfig, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('connected to db')
    }
})

// middleware
app.listen(PORT, () => console.log(`listening on port ${PORT}`))