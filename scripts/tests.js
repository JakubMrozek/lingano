const assert = require('assert')
const fs = require('fs')
const path = require('path')
const {it, describe, run} = require('../lib/testRunner')

global.assert = assert
global.equals = assert.equal
global.it = it
global.describe = describe

const testDir = path.join(__dirname, '..', 'tests')

fs.readdirSync(testDir).forEach(file => {
  require(`${testDir}/${file}`)
})

run()
