
//util.isObject is deprecated
function isObject(obj) {
  return null !== obj && typeof obj === 'object'
}

//util.isString is deprecated
function isString(obj) {
  return typeof obj === 'string'
}

//util.isFunction is deprecated
function isFunction(obj) {
  return typeof obj === 'function'
}

//util.isUndefined is deprecated
function isUndefined(obj) {
  return obj === undefined
}

//util.isDefined is deprecated
function isDefined(obj) {
  return !isUndefined(obj)
}

//util.isNull is deprecated
function isNull(obj) {
  return obj === null
}

//util.isNullOrUndefined is deprecated
function isNullOrUndefined(obj) {
  return isNull(obj) || isUndefined(obj)
}



exports.isObject = isObject
exports.isString = isString
exports.isFunction = isFunction
exports.isUndefined = isUndefined
exports.isDefined = isDefined
exports.isNullOrUndefined = isNullOrUndefined
