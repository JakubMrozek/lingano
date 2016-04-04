const assert = require('assert')
const fs = require('fs')
const path = require('path')
const {run} = require('../lib/runner')
const {last} = require('../lib/util')

const directory = path.join(__dirname, '..', 'tests')
const tests = []

function it(title, test) {
  last(tests).tests.push({title, test})
}

global.assert = assert
global.equals = assert.deepEqual
global.it = it

fs.readdirSync(directory).forEach(name => {
  tests.push({name, tests: []})
  require(`${directory}/${name}`)
})
run(tests)
