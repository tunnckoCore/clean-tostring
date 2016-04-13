/*!
 * clean-tostring <https://github.com/tunnckoCore/clean-tostring>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var cleanupCoverageCode = require('cleanup-coverage-code')

/**
 * > Clean coverage code of `fn.toString()`, but be aware of that
 * it remains minified.
 *
 * **Example**
 *
 * ```js
 * var cleanup = require('clean-tostring')
 *
 * function fixture (a) {
 *   if (typeof a === 'string') {
 *     return a
 *   }
 *   return false
 * }
 *
 * console.log(cleanup(fixture))
 * // => 'function fixture(a) {\n    if (typeof a === \'string\') {\n      return a\n    }\n    return false\n  }'
 *
 * // and running under istanbul
 * console.log(cleanup(fixture))
 * // => 'function fixture(a) {if(typeof a===\'string\'){return a;}else{}return false;}'
 * ```
 *
 * @param  {Function} `fn`
 * @return {String}
 * @api public
 */

module.exports = function cleanTostring (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('clean-tostring: expect `fn` be function')
  }
  return cleanupCoverageCode(fn.toString()).replace('\)\{', ') {')
}
