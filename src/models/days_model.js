const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
  name: String
})

module.exports = mongoose.model('Day', daySchema)