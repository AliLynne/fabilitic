const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes/routes')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/fabilitic', { useNewUrlParser: true })
app.use(express.json())
routes(app)

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

module.exports = app