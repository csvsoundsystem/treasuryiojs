var treasuryio = require('../treasuryio')

treasuryio('SELECT * FROM t1 LIMIT 10', 'csv', function(err, csvResponse) {
  if (err) {
    console.log(err)
  }
  console.log(csvResponse)
});

treasuryio('SELECT * FROM t1 LIMIT 10', 'json', function(err, jsonResponse) {
  if (err) {
    console.log(err)
  }
  console.log(jsonResponse)
});
