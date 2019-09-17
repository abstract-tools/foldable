# foldable

Fold any [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

`npm install --save foldable`

```javascript
const fold = require('foldable')

const myStr = 'abc'
const myArr = [ 1, 2, 3 ]
const myObj = { a: 1, b: 2, c: 3 }

fold(myStr, 0, acc => acc + 1)
// => 3

fold(myArr, 0, (acc, value) => acc + value)
// => 6

fold(Object.entries(myObj), {}, (acc, [key, value]) => ({
  ...acc,
  [key]: value + 1
}))
// => { a: 2, b: 3, c: 4 }
```
