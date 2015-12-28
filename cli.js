#!/usr/bin/env node
'use strict'

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    f: 'file',
    s: 'sum'
  },
  default: {
    sum: true
  }
})
var timestamp = require('./')

if (argv['file']) {
  timestamp().readFileLines(argv['file'], { 'sum': argv['sum'] })
} else {
  console.log(timestamp().stamp())
  process.exit(1)
}
