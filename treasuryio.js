(function(){
  var r
  var isNode
  if (typeof require !== 'undefined') {
    isNode = true
    r = require('request')
    dsv = require('dsv')
  }

  var api_endpoint = 'http://api.treasury.io/cc7znvq/47d80ae900e04f2/sql/?q=';

  function convertJSONtoCSV (query, format, cb){
    fetchJSON(query, function (err, response){
      if (err) {
        return cb(err)
      }
      if (format === 'json'){
        cb(null, response);
      } else if (format === 'csv'){
        if (!dsv) {
          cb('Please load dsv as a javascript dependency. https://raw.githubusercontent.com/csvsoundsystem/treasuryiojs/master/test/dsv.min.js')
        } else {
          cb(null, dsv.csv.format(response));
        }
      }
    });
  };
   
  function fetchJSON (query, cb) {
    var request
    if (isNode) {
      r(api_endpoint + query, function (err, reponse, body) {
        if (err) {
          return cb(err)
        }
        cb(null, JSON.parse(body))
      })
    } else {
      request = new XMLHttpRequest()
      request.open('GET', api_endpoint + query, true)

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          cb(null, JSON.parse(request.responseText))
        } else {
          cb(request.status)
        }
      }

      request.onerror = function () {
        // There was a connection error of some sort
        cb('Error connecting to the API')
      }
      request.send()
    }
  }

  if (typeof(module) == 'undefined') {
    window.treasuryio = convertJSONtoCSV;
  } else {
    module.exports = convertJSONtoCSV;
  }
})()
