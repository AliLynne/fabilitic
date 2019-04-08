const Day = require('../models/days_model')

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there'})
  },
  post(req, res) {
    res.send('Got a POST request')
  },
  put(req, res) {
    res.send('Got a PUT reqest at /days')
  },
  delete(req, res) {
    res.send('Got a DELETE request at /days')
  }
}

