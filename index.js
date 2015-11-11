'use strict';
var moment = require('moment');

module.exports = function () {
	return moment().format('YY-MM-DD HH:mm');
};
