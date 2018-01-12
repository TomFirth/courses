var Todos = require('../models/todoModel')

module.exports = (app) => {
  app.get('/api/setupTodos', (req, res) => {
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy Milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'est',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false
      }
    ]
    Todos.create(starterTodos, (err, results) => {
      if (err) throw err
      res.send(results)
    })
  })
}
