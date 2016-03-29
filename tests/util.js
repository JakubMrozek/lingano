const util = require('../lib/util')

describe('lib/util')

it ('is object', () => {
  equals(util.isObject({}), true)
  equals(util.isObject(), false)
  equals(util.isObject(function(){}), false)
  equals(util.isObject(null), false)
})

it ('is string', () => {
  equals(util.isString('test'), true) 
  equals(util.isString(42), false)
})

it ('is function', () => {
  equals(util.isFunction(x => x), true)
  equals(util.isFunction({}), false)
})

it ('is undefined', () => {
  equals(util.isUndefined(undefined), true)
  equals(util.isUndefined({}), false)
})

it ('is defined', () => {
  equals(util.isDefined({}), true)
  equals(util.isDefined(undefined), false)
})

it ('is null or undefined', () => {
  equals(util.isNullOrUndefined(undefined), true)
  equals(util.isNullOrUndefined(null), true)
  equals(util.isNullOrUndefined('test'), false)
})
