'use strict';
var assert = require('assert');
var moment = require('moment');
var timestamp = require('./');

it('should ', function () {
	assert.strictEqual(timestamp(), moment().format('YY-MM-DD HH:MM'));
});
