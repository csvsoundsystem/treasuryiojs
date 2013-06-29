treasuryiojs
=====
This is a [treasury.io](http://treasury.io) client for JavaScript.

## Install

    npm install treasuryio

## Run

    var treasuryio = require('treasuryio')
    treasuryio('SELECT * FROM t1 LIMIT 10;', function(response){
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
