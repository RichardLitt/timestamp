'use strict'
var moment = require('moment')
var format = 'YY-MM-DD HH:mm'

module.exports = function () {
  function getMinuteDifference (array, outputMeasure) {
    let a = array[0]
    let b = array[1]
    return moment(b, format).diff(moment(a, format), outputMeasure)
  }

  function readFileLines (filename, opts) {
    var rl = require('readline').createInterface({
      input: require('fs').createReadStream(filename)
    })

    var times = []

    rl.on('line', function (line) {
      let timePeriod = line.split(' -- ')
      if (timePeriod.length !== 1) {
        let difference = getMinuteDifference(timePeriod, 'minutes')
        times.push(difference)
        console.log(difference)
      }
    })

    rl.on('close', function () {
      if (opts.sum !== false) {
        let minutes = times.reduce(function (a, b) {
          return a + b
        })
        console.log(`=====\nTotal:\n${Math.floor(minutes / 60)} hours, ${minutes % 60} minutes`)
      }
    })
  }

  function timestamp () {
    return moment().format(format)
  }

  return {
    getMinuteDifference: getMinuteDifference,
    readFileLines: readFileLines,
    stamp: timestamp
  }
}
