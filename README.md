# buf-to-uint
Read an [unsigned integer](http://kias.dyndns.org/comath/13.html) from a [Buffer](https://nodejs.org/api/buffer.html) into a good ol' JavaScript [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number). Uses [bignum](https://www.npmjs.com/package/bignum) under-the-hood for bitwise operations. At this time only [Big Endian](https://en.wikipedia.org/wiki/Endianness) support is provided.

## example
```js
var bufToUInt = require('buf-to-uint')

var buf = Buffer.from([0b01100000, 0b11001100])
var num1 = bufToUInt(buf, 1, 3)
var num2 = bufToUInt(buf, 12, 4)

console.log(num1, num2) // 6 12
```

## license
License Zero Reciprocal Public License 2.0.1
