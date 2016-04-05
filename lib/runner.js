const {repeat} = require('./util')

/*
Test runner output:

***************************************

  render.js
    ✔ should render tree
    ✔ should render component
    ✔ should render component as object

  util.js
    ✔ should be object
    ✔ should be string
    ✔ should be function
    ✔ should be undefined
    ✔ should be defined
    ✔ should be null or undefined
    ✔ should compose functions
    ✔ should map values
    ✔ should join values
    ✔ should repeat values

  SUMMARY - ALL: 13 | OK: 13 | FAILED: 0

*****************************************
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
  `✔ ${title}`
)
const messageFail = title => (
  `x ${title}`
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
  let ok = 0
  let failed = 0
  results.forEach(set => {
    set.forEach(result => result ? ++ok : ++failed)
  })
  let all = ok + failed
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
  render(concat(space2, messageSummary(summary)))
  separateOutput()
  if (summary.failed) process.exit(1)
}

exports.run = run
