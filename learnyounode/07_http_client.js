var http = require('http')

http.get(process.argv[2], function(req) {
	req.setEncoding('utf8')
	req.on('data', console.log)
	req.on('error', console.error)
})