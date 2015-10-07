# Underline.js - Underscore.js for modern Javascript

The correct way to use underscore.js using modern ES7 functional bind `::` syntax.

```javascript
import { map, reduce } from 'underline';

// Map an array with underline
[1, 2, 3]::map((e) => e * 10));

// Sum an array using underline
[1, 2, 3]::reduce((a, e) => a + e, 0)
```

The way it is currently used now 

```javascript
// Functional way to map using underscore
_.map([1, 2, 3], (e) => e * 10)

// Functional way to reduce
_.reduce([1, 2, 3], (a, e) => a + e, 0)
```

**Underline supports chaining without wrapping like underscore**

```javascript
[1, 2, 3]::map((e) => e * 10)
         ::reduce((a, e) => a + e, 0)
```

## Usage

To get started you will need use [Babel](https://babeljs.io) transpiler with experimental feature [es7.functionBind](http://babeljs.io/blog/2015/05/14/function-bind/#usage) turned on. Then

1. Install using npm - `npm install --save underline`
2. Import functions needed - `import { map } from 'underline'`
3. Call a function using `::` operator as such `[1, 2, 3]::map((e) => e * 10)`

## Functions Available

All of the functions available in [underscore.js](http://underscorejs.org/) are available in `underline.js`

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
