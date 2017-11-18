var dir = process.argv[2]
var fileExt = '.' + process.argv[3]
var path = require('path')
var fs = require('fs')

fs.readdir(dir, function(err, list) {
  if (err) {
    return console.error(err)
  }
  list.forEach(function (file) {
    if (path.extname(file) === fileExt) {
      console.log(file)
    }
  })
})