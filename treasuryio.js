(function(){
  var $   = require('jquery'),
      dsv = require('dsv'),
      pi_endpoint = 'https://premium.scraperwiki.com/cc7znvq/47d80ae900e04f2/sql/?q=';

  function convertJSONtoCSV(query){
    fetchJSON(query).done(function(json){
      $download_csv_btn.html('Download .csv')
      var csv = dsv.csv.format(json);
      console.log(csv)
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
