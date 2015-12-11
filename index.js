'use strict'
var moment = require('moment')
var format = 'YY-MM-DD HH:mm'

module.exports = function () {
  function getMinuteDifference (array, outputMeasure) {
    let a = array[0]
    let b = array[1]
    return moment(b, format).diff(moment(a, format), outputMeasure)
  }

  function readFileLines (filename) {
    var rl = require('readline').createInterface({
      input: require('fs').createReadStream(filename)
    })

    rl.on('line', function (line) {
      let timePeriod = line.split(' -- ')
      console.log(getMinuteDifference(timePeriod, 'minutes'))
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
