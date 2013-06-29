if (typeof(require) != 'undefined') {
  var $   = require('jquery'),
      dsv = require('dsv')
}

(function(){
  var api_endpoint = 'https://premium.scraperwiki.com/cc7znvq/47d80ae900e04f2/sql/?q=';

  function convertJSONtoCSV(query, callback){
    fetchJSON(query).done(function(json){
      callback(dsv.csv.format(json));
    });
  };
   
  function fetchJSON(query){
    return $.ajax({
      url: api_endpoint + query
    });
  };

  if (typeof(module) == 'undefined') {
    window.treasuryio = convertJSONtoCSV;
  } else {
    module.exports = convertJSONtoCSV;
  }
})()
