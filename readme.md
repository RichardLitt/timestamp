# rl-timestamp [![Build Status](https://travis-ci.org/RichardLitt/timestamp.svg?branch=master)](https://travis-ci.org/RichardLitt/timestamp)

> Some simple timestamp tools


## Install

```
$ npm install --save rl-timestamp
```

I would also add `alias timestamp=rl-timestamp` to your bash profile.


## Usage

```js
var timestamp = require('rl-timestamp');

timestamp();
//=> 'unicorns & rainbows'
```


## API

### timestamp(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global rl-timestamp
```

```
$ timestamp --help

  Usage
    timestamp [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ timestamp
    unicorns & rainbows
    $ timestamp ponies
    ponies & rainbows
```


## License

MIT © [Richard Littauer](http://burntfen.com)
