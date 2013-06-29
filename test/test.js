var treasuryio = require('../treasuryio')

treasuryio('SELECT * FROM sqlite_master', function(text) {
  console.log(text)
})
