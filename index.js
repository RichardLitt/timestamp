'use strict'
var moment = require('moment')
var format = 'YY-MM-DD HH:mm'

module.exports = function () {
  function getDifference (array, outputMeasure) {
    let a = array[0]
    let b = array[1]
    return moment(b, format).diff(moment(a, format), outputMeasure)
  }

  function durationValid (array) {
    return moment(array[0], format).isValid() && moment(array[1], format).isValid()
  }

  function readFileLines (filename, opts) {
    var rl = require('readline').createInterface({
      input: require('fs').createReadStream(filename)
    })

    var times = []

    function getDayDifference (timestamp) {
      if (timestamp && moment(timestamp, format).isValid()) {
        const test = Math.abs(
          getDifference([
            moment().format(format),
            moment(timestamp.split(' ')[0], 'YY-MM-DD')
          ], 'day')
        )
        return test
      }
    }

    rl.on('line', function (line) {
      let timePeriod = line.split('--')
      if (!opts.now && timePeriod.length === 2 && durationValid(timePeriod)) {
        if (
          !opts.today && (opts.since !== 0 && !opts.since) ||
          (opts.today && moment().isSame(moment(timePeriod[1], format), 'day')) ||
          ((opts.since === 0 || opts.since) && getDayDifference(timePeriod[0]) <= parseInt(opts.since))
        ) {
          let difference = getDifference(timePeriod, 'minutes')
          console.log(difference)
          times.push(difference)
        }
      }
      if (moment(timePeriod[0], format).isValid() && timePeriod.length === 2 && timePeriod[1] === '') {
        let difference = getDifference([timePeriod[0], moment().format(format)], 'minutes')
        times.push(difference)
        if (!opts.now) console.log(difference)
        if (opts.now) {
          console.log('Duration so far:\n%s hours and %s minutes', Math.floor(difference / 60), difference % 60)
        }
      }
    })

    rl.on('close', function () {
      if (!opts.now && opts.sum !== false && times.length !== 0) {
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
    getDifference: getDifference,
    readFileLines: readFileLines,
    stamp: timestamp
  }
}
