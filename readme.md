# assert-key [![Build Status](https://travis-ci.org/bendrucker/assert-key.svg?branch=master)](https://travis-ci.org/bendrucker/assert-key) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/assert-key.svg)](https://greenkeeper.io/)

> Assert that an object has a specified key


## Install

```
$ npm install --save assert-key
```


## Usage

```js
var assertKey = require('assert-key')

assertKey({foo: 1}, 'foo')
//=> noop

assertKey({foo: 1}, 'bar')
//=> Error: expected bar in object
```

## API

#### `assertKey(object, key)` -> `undefined`

##### object

*Required*  
Type: `object`

The source object.

##### key

*Required*  
Type: `string`

The key to expect.


## License

MIT © [Ben Drucker](http://bendrucker.me)
