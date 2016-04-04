const {repeat} = require('./util')

/*
Test runner output:
  ****************************************

  render.js
    OK - should render tree
    OK - should render component
    OK - should render component as object

  util.js
    OK - should be object
    OK - should be string
    OK - should be function
    OK - should be undefined
    OK - should be defined
    OK - should be null or undefined
    OK - should compose functions
    OK - should map values
    OK - should join values
    OK - should repeat values

    SUMMARY - ALL: 13 | OK: 13 | FAILED: 0

    **************************************
*/

const concat = (...args) => args.join('')

const space = repeat(' ')
const star = repeat('*')

const space2 = space(2)
const space4 = space(4)
const space6 = space(6)

const render = txt => console.log(txt)
const newLine = () => render('')


const messageOk = title => (
  `OK - ${title}`
)
const messageFail = title => (
  `FAILED - ${title}`
)
const messageEx = ({name, actual, operator, expected}) => (
  `EXCEPTION - ${name} ${actual} ${operator} ${expected}`
)
const messageSummary = ({all, failed, ok}) => (
  `SUMMARY - ALL: ${all} | OK: ${ok} | FAILED: ${failed}`
)


function renderOk(title) {
  render(concat(space4, messageOk(title)))
}

function renderFail(title, exception) {
  render(concat(space4, messageFail(title)))
  render(concat(space6, messageEx(exception)))
}

function runTest(test) {
  try {
    test()
  } catch (e) {
    return e
  }
}

function renderTest({title, test}) {
  const exception = runTest(test)
  exception ? renderFail(title, exception) : renderOk(title)
  return !exception
}

function renderSet({name, tests}) {
  render(concat(space2, name))
  const results = tests.map(renderTest)
  newLine()
  return results
}

function calculateSummary(results) {
  var ok = 0
  var failed = 0
  results.forEach(set => {
    set.forEach(result => result ? ++ok : ++failed)
  })
  var all = ok + failed
  return {ok, failed, all}
}

function separateOutput() {
  newLine()
  render(star(60))
  newLine()
}

function run(tests) {
  separateOutput()
  const results = tests.map(renderSet)
  const summary = calculateSummary(results)
  render(concat(space4, messageSummary(summary)))
  if (summary.failed) process.exit(1)
  separateOutput()
}

exports.run = run
