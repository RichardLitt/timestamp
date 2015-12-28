# rl-timestamp [![Build Status](https://travis-ci.org/RichardLitt/timestamp.svg?branch=master)](https://travis-ci.org/RichardLitt/timestamp)

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

#### Without `no-sum` flag

```sh
$ rl-timestamp -f testfile.txt --no-sum
111
56
85
120
```

#### With `today` flag

```sh
$ rl-timestamp -f testfile.txt --no-sum
120
```

## License

MIT © [Richard Littauer](http://burntfen.com)
