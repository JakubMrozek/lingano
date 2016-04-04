// node.js util is* methods are deprecated

function isObject(obj) {
  return null !== obj && typeof obj === 'object'
}

function isString(obj) {
  return typeof obj === 'string'
}

function isFunction(obj) {
  return typeof obj === 'function'
}

function isUndefined(obj) {
  return obj === undefined
}

function isDefined(obj) {
  return !isUndefined(obj)
}

function isNull(obj) {
  return obj === null
}

function isNullOrUndefined(obj) {
  return isNull(obj) || isUndefined(obj)
}

function compose(...fns) {
  return function composeFunctions(arg) {
    return fns.reverse().reduce((prev, fn) => {
      return prev ? fn(prev) : fn(arg)
    }, undefined)
  }
}

function map(fn) {
  return arr => arr.map(fn)
}

function join(separator) {
  return (arr) => arr.join(separator)
}

function repeat(str) {
  return count => String(str).repeat(count)
}

/*
function prop(fn, property) {
  if (isUndefined(property)) {
    return obj => obj[fn]
  } else {
    return obj => fn(obj[property])
  }
}

function concat(...fns) {
  return context => fns.reduce((prev, fn) => {
    return prev.concat(fn(context))
  }, [])
}

function reduce(fn) {
  return arr => arr.reduce((prev, item) => {
    return prev.concat(fn ? fn(item) : item)
  }, [])
}
*/

exports.isObject = isObject
exports.isString = isString
exports.isFunction = isFunction
exports.isUndefined = isUndefined
exports.isDefined = isDefined
exports.isNullOrUndefined = isNullOrUndefined

exports.compose = compose
exports.map = map
exports.join = join
exports.repeat = repeat
//exports.prop = prop
//exports.concat = concat
//exports.reduce = reduce
