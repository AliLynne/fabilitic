const mongoose = require('mongoose')

const db = mongoose.connection
before(function(done) {
  console.log('before ALL')
  mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true })
  
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    console.log('Connected!')
    done()
  })
})

beforeEach(function() {
  console.log('before every test')
  db.dropDatabase()
})

afterEach(function() {
  console.log('after every test')
})

after(function() {
  console.log('after ALL')
})