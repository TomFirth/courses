var sum = 0
process.argv.forEach(function (value) {
	if(!isNaN(value)) {
		sum += parseInt(value)
	}
})
console.log(sum)
