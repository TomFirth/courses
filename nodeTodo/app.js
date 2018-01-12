var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config')
var setupController = require('./controllers/setupController')
var apiController = require('./controllers/apiController')
var path = require('path')

var port = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs')

mongoose.connect(config.getDbConnectionString(), {
  useMongoClient: true
})
setupController(app)
apiController(app)

app.listen(port)
