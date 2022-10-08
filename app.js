require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer')
const urlShortenerRoutes = require('./routes/url-shortener.route')

const app = express()

mongoose.connect(process.env.MONGO_URI)

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(multer().array())

// Routes
app.use('/', urlShortenerRoutes)

const cleanup = () => {
  mongoose.connection.close(() => {
    console.log('\nDISCONNECT DATABASE')
    process.exit()
  })
}

process.on('SIGINT', cleanup)
process.on('SIGHUP', cleanup)
process.on('SIGTERM', cleanup)

module.exports = app
