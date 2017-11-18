var http = require('http')
var map = require('through2-map')

var server = http.createServer(function(req, res) {
  if (req.method != 'POST') {
    res.end()
    return console.log('Ignoring %s request. I am POST only', req.method)
  }
  
  req.pipe(map(toUpper)).pipe(res)
})

function toUpper(chunk) {
  return chunk.toString().toUpperCase()
}

server.listen(process.argv[2])