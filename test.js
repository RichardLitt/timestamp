'use strict';
var assert = require('assert');
var moment = require('moment');
var timestamp = require('./');
var testFile = './testfile.txt'

it('should match the format provided', function () {
	assert.strictEqual(timestamp().stamp(), moment().format('YY-MM-DD HH:mm'));
})

// Probably won't work due to readFile issues. Damn.
// TODO Make this work
it('should ', function () {
  assert.strictEqual(timestamp().readFileLines(testFile, { 'sum': false }), 'blue')
})
