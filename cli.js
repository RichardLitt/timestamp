#!/usr/bin/env node
'use strict'

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    f: 'file',
    s: 'sum',
    t: 'today'
  },
  default: {
    sum: true
  }
})
var timestamp = require('./')

if (argv['file']) {
  timestamp().readFileLines(argv['file'], {
    'sum': argv['sum'],
    'today': argv['today']
  })
} else {
  console.log(timestamp().stamp())
  process.exit(1)
}
