#!/usr/bin/env node
'use strict'

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    f: 'file'
  }
})
var timestamp = require('./')

if (argv['file']) {
  timestamp().readFileLines(argv['file'])
} else {
  console.log(timestamp().stamp())
  process.exit(1)
}
