require('./06_make_it_modular_filtered.js')
(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		return console.error(err)
	}

	data.forEach(function(item) {
		console.log(item)
	})
})