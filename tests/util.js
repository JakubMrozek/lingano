const util = require('../lib/util')

it ('should be object', () => {
  equals(util.isObject({}), true)
  equals(util.isObject(), false)
  equals(util.isObject(function(){}), false)
  equals(util.isObject(null), false)
})

it ('should be string', () => {
  equals(util.isString('test'), true)
  equals(util.isString(42), false)
})

it ('should be function', () => {
  equals(util.isFunction(x => x), true)
  equals(util.isFunction({}), false)
})

it ('should be ndefined', () => {
  equals(util.isUndefined(undefined), true)
  equals(util.isUndefined({}), false)
})

it ('should be defined', () => {
  equals(util.isDefined({}), true)
  equals(util.isDefined(undefined), false)
})

it ('should be null or undefined', () => {
  equals(util.isNullOrUndefined(undefined), true)
  equals(util.isNullOrUndefined(null), true)
  equals(util.isNullOrUndefined('test'), false)
})

it ('should compose functions', () => {
  const fn1 = (arg) => `${arg}1`
  const fn2 = (arg) => `${arg}2`
  const fn3 = (arg) => `${arg}3`
  const fn4 = util.compose(fn3, fn2, fn1)
  equals(fn4(0), '0123')
})

it ('should map values', () => {
  const square = util.map((a) => a * 2)
  equals(square([1, 2, 3]), [2, 4, 6])
})

it ('should join values', () => {
  const joinBySpace = util.join(' ')
  equals(joinBySpace([1, 2, 3]), '1 2 3')
})
