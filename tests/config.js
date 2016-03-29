assert = require('assert')
const {it, describe, run} = require('../lib/testRunner')

global.assert = assert
global.equals = assert.equal
global.it = it
global.describe = describe

require('./render')
require('./util')

run()
