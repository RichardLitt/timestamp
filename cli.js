#!/usr/bin/env node
'use strict';
// var meow = require('meow');
var timestamp = require('./');

// var cli = meow({
// 	help: [
// 		'Usage',
// 		'  $ timestamp [input]',
// 		'',
// 		'Options',
// 		'  --foo  Lorem ipsum. [Default: false]',
// 		'',
// 		'Examples',
// 		'  $ timestamp',
// 		'  unicorns & rainbows',
// 		'  $ timestamp ponies',
// 		'  ponies & rainbows'
// 	]
// });

console.log(timestamp());
