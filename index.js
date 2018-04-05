var bignum = require('bignum')

function bufToUInt(buf, off, len) {
  var res = bignum(0)
  for (var bit = off; bit < (off + len); bit++) {
    var bytidx = Math.floor(bit / 8)
    var bitidx = 7 - (bit % 8)
    res = res.shiftLeft(1).add((buf[bytidx] >> bitidx) & 0x01)
  }
  return res.toNumber()
}

module.exports = bufToUInt
