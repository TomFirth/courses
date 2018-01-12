var configValues = require('./config')
var env = process.argv.NODE_ENV || 'local'

module.exports = {
  getDbConnectionString: () => {
    return `mongodb://${configValues[env].uname !== '' ? configValues[env].uname + ':' : ''}${configValues[env].pwd}${configValues[env].host}${configValues.collection}`
  }
}
