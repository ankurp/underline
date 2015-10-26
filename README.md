# Underline.js - Underscore.js for modern Javascript

Using modern ES7 functional bind `::` syntax you can now call the underscore.js function the 'right' or non-functional way. underline.js is a thin layer between your code and underscore.js which binds all underscore functions called to the target object.

## Example

```javascript
import { difference, all } from 'underline'; // Require functions needed

// Differece of arrays
[12, 1, 2, 3, 10, 11]::difference([10, 11, 12])
// => [1, 2, 3]

// Check for all elements are less than 10
[1, 2, 3, 10]::all((e) => e < 10)
// => false

/////
// VS
/////

// Functional way to map
_.difference([12, 1, 2, 3, 10, 11], [10, 11, 12])

// and reduce
_.all([1, 2, 3, 10], (e) => e < 10)
```

**Underline supports chaining without wrapping like underscore**

```javascript
// Chaining difference and all
[12, 1, 2, 3, 10, 11]::difference([10, 11, 12])
                     ::all((e) => e < 10)
// => true

/////
// VS
/////

// Too much typing to chain in underscore and get its value
_.chain([12, 1, 2, 3, 10, 11]).difference([10, 11, 12])
                              .all((e) => e < 10)
                              .value()
```

## Try it

Try it out in the [REPL](http://ankurp.github.io/underline/)

## Usage

To get started you will need to use [Babel](https://babeljs.io) transpiler with experimental feature [es7.functionBind](http://babeljs.io/blog/2015/05/14/function-bind/#usage) enabled. Then:

1. Install this library using npm - `npm install --save underline`
2. Import functions as needed - `import { map } from 'underline'`
3. Call a function using `::` operator as such `[1, 2, 3]::map((e) => e * 10)`

## Functions Available

All of the functions available in [underscore.js](http://underscorejs.org/) are available in `underline.js`.

* `iteratee`
* `forEach`
* `each`
* `collect`
* `map`
* `inject`
* `foldl`
* `reduce`
* `foldr`
* `reduceRight`
* `detect`
* `find`
* `select`
* `filter`
* `reject`
* `all`
* `every`
* `any`
* `some`
* `include`
* `includes`
* `contains`
* `invoke`
* `pluck`
* `where`
* `findWhere`
* `max`
* `min`
* `shuffle`
* `sample`
* `sortBy`
* `groupBy`
* `indexBy`
* `countBy`
* `toArray`
* `size`
* `partition`
* `take`
* `head`
* `first`
* `initial`
* `last`
* `drop`
* `tail`
* `rest`
* `compact`
* `flatten`
* `without`
* `unique`
* `uniq`
* `union`
* `intersection`
* `difference`
* `zip`
* `unzip`
* `object`
* `findIndex`
* `findLastIndex`
* `sortedIndex`
* `indexOf`
* `lastIndexOf`
* `range`
* `bind`
* `partial`
* `bindAll`
* `memoize`
* `delay`
* `defer`
* `throttle`
* `debounce`
* `wrap`
* `negate`
* `compose`
* `after`
* `before`
* `once`
* `keys`
* `allKeys`
* `values`
* `mapObject`
* `pairs`
* `invert`
* `methods`
* `functions`
* `extend`
* `assign`
* `extendOwn`
* `findKey`
* `pick`
* `omit`
* `defaults`
* `create`
* `clone`
* `tap`
* `isMatch`
* `isEqual`
* `isEmpty`
* `isElement`
* `isArray`
* `isObject`
* `isArguments`
* `isFunction`
* `isString`
* `isNumber`
* `isDate`
* `isRegExp`
* `isError`
* `isFinite`
* `isNaN`
* `isBoolean`
* `isNull`
* `isUndefined`
* `has`
* `noConflict`
* `identity`
* `constant`
* `noop`
* `property`
* `propertyOf`
* `matches`
* `matcher`
* `times`
* `random`
* `now`
* `escape`
* `unescape`
* `result`
* `uniqueId`
* `templateSettings`
* `template`
* `chain`
* `mixin`
