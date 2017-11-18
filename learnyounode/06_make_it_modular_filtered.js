var fs = require('fs')

module.exports = function(dir, filter, callback) {
  var extFilter = new RegExp('\\.' + filter + '$')
  var result = []
  fs.readdir(dir, function(err, list) {
    if (err){
      return callback(err)
    }
    list.forEach(function(item) {
      if (extFilter.test(item)){
        result.push(item)
      }
    })
    callback(null, result)
  })
}
