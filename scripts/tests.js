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

// hack, assert doesnt support arrays
// todo better solution
function equals(actual, expected, message) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    return assert.equal(actual.toString(), expected.toString(), message)
  }
  return assert.equal(actual, expected, message)
}

global.assert = assert
global.equals = equals
global.it = it

fs.readdirSync(directory).forEach(loadTestFile)
run(tests)
