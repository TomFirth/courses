var fs = require('fs')
var file = process.argv[2]
var file = fs.readFile(file, 'utf8', function(err, data) {
  if (!err) {
    data = data.split('\n').length - 1
    console.log(data)
  }
});
