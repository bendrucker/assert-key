'use strict'

var assert = require('assert-ok')

module.exports = function assertKey (object, key) {
  assert(typeof object === 'object', 'expected object')
  assert(typeof key === 'string', 'exected string key')
  assert(key in object, 'expected ' + key + ' in object')
}
