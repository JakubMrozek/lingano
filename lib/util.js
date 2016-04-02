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

exports.isObject = isObject
exports.isString = isString
exports.isFunction = isFunction
exports.isUndefined = isUndefined
exports.isDefined = isDefined
exports.isNullOrUndefined = isNullOrUndefined
exports.compose = compose
