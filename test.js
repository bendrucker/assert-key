'use strict'

var test = require('tape')
var assertKey = require('./')

test(function (t) {
  t.doesNotThrow(assertKey.bind(null, {foo: 1}, 'foo'))
  t.throws(assertKey)
  t.throws(assertKey.bind(null, {}))
  t.throws(assertKey.bind(null, {foo: 1}, 'bar'))
  t.end()
})
