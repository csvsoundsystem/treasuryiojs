var treasuryio = require('../treasuryio')

treasuryio('SELECT * FROM sqlite_master', 'csv', function(text) {
  console.log(text)
})
