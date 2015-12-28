'use strict';
var assert = require('assert');
var moment = require('moment');
var timestamp = require('./');

it('should match the format provided', function () {
	assert.strictEqual(timestamp().stamp(), moment().format('YY-MM-DD HH:mm'));
})
it('should ', function () {
	assert.strictEqual(timestamp(), moment().format('YY-MM-DD HH:mm'));
});
