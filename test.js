/*!
 * clean-tostring <https://github.com/tunnckoCore/clean-tostring>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var cleanTostring = require('./index')
var isIstanbul = process.env.running_under_istanbul

test('should throw TypeError if `val` not a function', function (done) {
  function fixture () {
    cleanTostring(123)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `fn` be function/)
  done()
})

test('should clean coverage code from function toString', function (done) {
  /* istanbul ignore next */
  function fixture (a) {
    if (typeof a === 'string') {
      return a
    }
    return false
  }

  var actual = cleanTostring(fixture)
  var expected = isIstanbul
    ? 'function fixture(a) {if(typeof a===\'string\'){return a;}else{}return false;}'
    : 'function fixture(a) {\n    if (typeof a === \'string\') {\n      return a\n    }\n    return false\n  }'

  test.strictEqual(actual, expected)
  done()
})
