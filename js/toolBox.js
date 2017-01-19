module.exports.deepTypeOf = function (element) {
  if (typeof element === 'object') {
    if (element instanceof Array) {
      return 'Array'
    } else {
      return 'Object'
    }
  } else {
    return (typeof element)
  }
}