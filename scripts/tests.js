const assert = require('assert')
const fs = require('fs')
const path = require('path')
const {run} = require('../lib/runner')

const directory = path.join(__dirname, '..', 'tests')
const tests = []

function it(title, test) {
  const lastTests = tests[tests.length - 1].tests
  lastTests.push({title, test})
}

function loadTestFile(name) {
  tests.push({name, tests: []})
  require(`${directory}/${name}`)
}

global.assert = assert
global.equals = assert.deepEqual
global.it = it

fs.readdirSync(directory).forEach(loadTestFile)
run(tests)
