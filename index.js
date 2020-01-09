const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config
const morgan = require('morgan')

//note: heroku wont always use port 5000 - as specfied below, heroku will reference the env else 5000
const PORT = process.env.port || 5000

const app = express()


const dbConfig = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(process.env.DB_URL, dbConfig, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('connected to db')
    }
})

//middleware to access the body of the request
app.user(express.json())
app.use(morgan('dev'))
//allows 2 different urls to talk with each other
app.use(cors({
    origin: "http://localhost:3000"
}))

// connect with index.js file in routes dir 
app.use(require('./routes/index'))



// listen
app.listen(PORT, () => console.log(`listening on port ${PORT}`))