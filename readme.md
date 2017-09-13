# rl-timestamp [![Build Status](https://travis-ci.org/RichardLitt/timestamp.svg?branch=master)](https://travis-ci.org/RichardLitt/timestamp)

[![Greenkeeper badge](https://badges.greenkeeper.io/RichardLitt/timestamp.svg)](https://greenkeeper.io/)

> Some simple timestamp tools

## Install

    $ npm install --save rl-timestamp

I would also add `alias timestamp=rl-timestamp` to your bash profile.

## Usage

```js
var timestamp = require('rl-timestamp');

timestamp();
//=> 'unicorns & rainbows'
```

## API

### timestamp() methods

#### readFileLines

Type: `path`

Prints out minute totals for two moment points separated by -- from a file

#### options

##### no-sum

Type: `boolean`  
Default: `false`

Silences print out of total hours.

## CLI

### Install

```sh
$ npm install --global rl-timestamp
```

### Default

```sh
$ rl-timestamp
15-12-28 18:12
```

### With file

```sh
$ rl-timestamp -f testfile.txt
111
56
85
120
=====
Total:
6 hours, 12 minutes
```

#### With `no-sum` flag

```sh
$ rl-timestamp -f testfile.txt --no-sum
111
56
85
120
```

#### With `since` flag

```sh
$ rl-timestamp -f testfile.txt -since=5
85
120
=====
Total:
3 hours, 25 minutes
```

#### With `today` flag

```sh
$ rl-timestamp -f testfile.txt --today
120
=====
Total:
2 hours, 0 minutes
```

#### With `now` flag

```sh
$ rl-timestamp -f testfile.txt --now
Duration so far:
0 hours and 17 minutes
```

## License

MIT © [Richard Littauer](http://burntfen.com)
