# timestamp [![Build Status](https://travis-ci.org/RichardLitt/timestamp.svg?branch=master)](https://travis-ci.org/RichardLitt/timestamp)

> My rad module


## Install

```
$ npm install --save timestamp
```


## Usage

```js
var timestamp = require('timestamp');

timestamp('unicorns');
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
$ npm install --global timestamp
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
