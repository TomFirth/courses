var path = require('path')
var fs = require('fs')

var filtered = module.exports = {}

filtered.filterFiles(callback) {
  if (err, data) {

  }
  var dir = process.argv[2]
  var fileExt = '.' + process.argv[3]
  fs.readdir(dir, function(err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === fileExt) {
        console.log(file)
      }
    })
  })
})
