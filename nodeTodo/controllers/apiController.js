var Todos = require('../models/todoModel')
var bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/api/todos', (req, res) => {
    Todos.find({ isDone: false }, (err, todos) => {
      if (err) throw err
      var list = []
      todos.forEach(todo => {
        list.push({
          todo: todo.todo,
          isDone: todo.isDone
        })
      })
      res.send(list)
    })
  })

  app.get('/api/todos/:uname', (req, res) => {
    Todos.find({ username: req.params.uname }, (err, todos) => {
      if (err) throw err
      res.send(todos)
    })
  })

  app.get('/api/todo/:id', (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, todo) => {
      if (err) throw err
      res.send(todo)
    })
  })

  app.post('/api/todo', (req, res) => {
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      }, (err, todo) => {
        if (err) throw err
        res.send('Success')
      })
    } else {
      var newTodo = Todos({
        username: 'test',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      })
      newTodo.save(err => {
        if (err) throw err
        res.send('Success')
      })
    }
  })

  app.delete('api/todo', (req, res) => {
    Todos.findByIdAndRemove(req.body.id, (err) => {
      if (err) throw err
      res.send('Success')
    })
  })
}
