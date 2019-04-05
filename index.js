const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  const daySchema = new mongoose.Schema({
    date: Date
  })

  const Day = mongoose.model('Day', daySchema)
})