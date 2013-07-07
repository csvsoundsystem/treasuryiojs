var treasuryio = require('../treasuryio')

treasuryio('SELECT * FROM t1 LIMIT 10', 'csv', function(csv_response) {
  console.log(csv_response)
});

treasuryio('SELECT * FROM t1 LIMIT 10', 'json', function(json_response) {
  console.log(json_response)
});
