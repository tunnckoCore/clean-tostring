# [clean-tostring][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Clean function `toString` from code coverage mess. It can't be ideal, but it's useful in testing process.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i clean-tostring --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const cleanTostring = require('clean-tostring')
```

### [cleanTostring](index.js#L41)
> Clean coverage code of `fn.toString()`, but be aware of that it remains minified.

**Params**

* `fn` **{Function}**    
* `returns` **{String}**  

**Example**

```js
var cleanup = require('clean-tostring')

function fixture (a) {
  if (typeof a === 'string') {
    return a
  }
  return false
}

console.log(cleanup(fixture))
// => 'function fixture(a) {\n    if (typeof a === \'string\') {\n      return a\n    }\n    return false\n  }'

// and running under istanbul
console.log(cleanup(fixture))
// => 'function fixture(a) {if(typeof a===\'string\'){return a;}else{}return false;}'
```

## Related
* [bind-context](https://www.npmjs.com/package/bind-context): Bind context to a function and preserves her name. Can be used… [more](https://www.npmjs.com/package/bind-context) | [homepage](https://github.com/tunnckocore/bind-context)
* [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency injectors.… [more](https://www.npmjs.com/package/function-arguments) | [homepage](https://github.com/tunnckocore/function-arguments)
* [get-fn-name](https://www.npmjs.com/package/get-fn-name): Get function name with strictness and correctness in mind. Also works for… [more](https://www.npmjs.com/package/get-fn-name) | [homepage](https://github.com/tunnckocore/get-fn-name)
* [is-bound-function](https://www.npmjs.com/package/is-bound-function): Check if given function is bound or not. | [homepage](https://github.com/tunnckocore/is-bound-function)
* [parse-function](https://www.npmjs.com/package/parse-function): Parse a function, arrow function or string to object with name, args,… [more](https://www.npmjs.com/package/parse-function) | [homepage](https://github.com/tunnckocore/parse-function)
* [rename-function](https://www.npmjs.com/package/rename-function): Rename a given function. Tries to be cross-platform and guaranteed. Useful when… [more](https://www.npmjs.com/package/rename-function) | [homepage](https://github.com/tunnckocore/rename-function)
* [smart-bind](https://www.npmjs.com/package/smart-bind): Smarter binding of function with some context. It uses .apply instead of… [more](https://www.npmjs.com/package/smart-bind) | [homepage](https://github.com/tunnckocore/smart-bind)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/clean-tostring/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[cleanup-coverage-code]: https://github.com/tunnckoCore/cleanup-coverage-code

[npmjs-url]: https://www.npmjs.com/package/clean-tostring
[npmjs-img]: https://img.shields.io/npm/v/clean-tostring.svg?label=clean-tostring

[license-url]: https://github.com/tunnckoCore/clean-tostring/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/clean-tostring
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/clean-tostring.svg

[travis-url]: https://travis-ci.org/tunnckoCore/clean-tostring
[travis-img]: https://img.shields.io/travis/tunnckoCore/clean-tostring/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/clean-tostring
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/clean-tostring.svg

[david-url]: https://david-dm.org/tunnckoCore/clean-tostring
[david-img]: https://img.shields.io/david/tunnckoCore/clean-tostring.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

