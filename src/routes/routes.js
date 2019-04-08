const DaysController = require('../controllers/days_controller')

module.exports = (app) => {
  app.get('/api', DaysController.greeting)
  app.post('/api/days', DaysController.post)
  app.put('/api/days', DaysController.put)
  app.delete('/api/days', DaysController.delete)
}