const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const PORT = process.env.PORT

//Path of Route
const feedbackRouter = require('./Router/feedbackRouter')

//Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Router
app.use('/api/v1/feedback', feedbackRouter)

app.listen(PORT, (err) =>{
    err ? console.log(`Error in Running Server - ${err.message}`) : console.log(`Server is Running Successfully`)
})