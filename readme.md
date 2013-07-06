treasuryiojs
=====
This is a [treasury.io](http://treasury.io) client for JavaScript. It can return a `csv` or a `json` response depending on whether you pass either string as the second argument..

## Install

    npm install treasuryio

## Run with a `csv` response

    var treasuryio = require('treasuryio')
    treasuryio('SELECT * FROM t1 LIMIT 10', 'csv', function(response){
        console.log(response);
    });

## Run with a `json` response

    var treasuryio = require('treasuryio')
    treasuryio('SELECT * FROM t1 LIMIT 10', 'json', function(response){
        console.log(response);
    });

## Test
To test that it works in the browser, open [this page](test/index.html).
You should see the database schema.

To test that it works in node, run

    cd test
    npm install treasuryio
    node test.js

It should print the database schema.
