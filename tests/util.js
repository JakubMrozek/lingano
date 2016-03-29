const {equal} = require('assert')
const util = require('../lib/util')


equal(util.isObject({}), true)
equal(util.isObject(), false)
equal(util.isObject(function(){}), false)
equal(util.isObject(null), false)

equal(util.isString('test'), true)
equal(util.isString(42), false)

equal(util.isFunction(x => x), true)
equal(util.isFunction({}), false)

equal(util.isUndefined(undefined), true)
equal(util.isUndefined({}), false)

equal(util.isDefined({}), true)
equal(util.isDefined(undefined), false)

equal(util.isNullOrUndefined(undefined), true)
equal(util.isNullOrUndefined(null), true)
equal(util.isNullOrUndefined('test'), false)
