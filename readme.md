treasuryiojs
=====

This is a [treasury.io](http://treasury.io) client for JavaScript. It can return a `csv` or a `json` response depending on whether you pass either string as the second argument..

## Install

```sh
npm install --save treasuryio
```

## In NodeJS

### Run with a `json` response

```js
  var treasuryio = require('treasuryio')
  treasuryio('SELECT * FROM t1 LIMIT 10', 'json', function (err, response) {
    if (err) {
      console.log(err)
    }
    console.log(response)
  })
```

### Run with a `csv` response

```js
var treasuryio = require('treasuryio')

treasuryio('SELECT * FROM t1 LIMIT 10', 'csv', function (err, response) {
  if (err) {
    console.log(err)
  }
  console.log(response)
})
```

## In the browser

The usage is exactly the same in the browser except you don't need the line `var treasuryio = require('treasuryio')`. The only catch is you need to load the dsv module in your HTML like so:

```html
<script src="dsv.min.js"></script>
```

You can grab copy this file from [here](https://raw.githubusercontent.com/csvsoundsystem/treasuryiojs/master/test/dsv.min.js).

## Test

To test that it works in the browser, open [this page](test/index.html).
You should see the first ten rows of of `t1`, Operating Cash Balance.

To test that it works in node, run

```sh
npm install
npm test
```

It should print the first ten rows from `t1`, "Operating Cash Balance" as csv and json.
