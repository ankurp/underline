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

```
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

## Functional Available

All of the functions available in [underscore.js](http://underscorejs.org/) are available in `underline`.
