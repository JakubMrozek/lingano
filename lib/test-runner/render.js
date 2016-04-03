const {compose, map, join, isUndefined, prop, repeat, concat, concatAndJoin, reduce} = require('../util')

/*

RESULT - OK: 11, FAILED: 1
------------------------------------------------------------

render.js | RESULT - OK: 3, FAILED: 0
  OK - should render tree
  OK - should render component
  OK - should render component as object

util.js | RESULT - OK: 8, FAILED: 1
  OK - should be object
  OK - should be string
  OK - should be function
  OK - should be ndefined
  OK - should be defined
  OK - should be null or undefined
  FAILED - should compose functions
    EXCEPTION - AssertionError: 01232 == 0123
  OK - should map values
  OK - should join values

************************************************************
*/


const row = (indent) => (text) => ({text, indent})

const row0 = row(0)
const row2 = row(2)
const row4 = row(4)
const row6 = row(6)

const repeatSpace = repeat(' ')
const repeatStar = repeat('*')
const repeatDash = repeat('-')


const messageOk = ({title}) => (
  `OK - ${title}`
)
const messageFail = ({title}) => (
  `FAILED - ${title}`
)
const messageException = ({ex: {name, actual, expected, operator}}) => (
  `EXCEPTION - ${name}: ${actual} ${operator} ${expected}`
)
const messageSummary = ({ok, failed}) => (
  `SUMMARY - OK: ${ok}, FAILED: ${failed}`
)


const resultOk = (result) => (
  compose(row4, messageOk)(result)
)

const resultFail = concat(
  compose(row4, messageFail),
  compose(row6, messageException)
)

const testResult = (result) => (
  result.ok ? resultOk(result) : resultFail(result)
)


//todo
function createOneTestHeader({name, result}) {
  return [
    row2(`${name} | ${messageSummary(result)}`)
  ]
}

//todo
function createOneTestBody(test) {
  const results = test.result.log.map(testResult)
  //return reduce(results)
  return results.reduce((prev, rows) => prev.concat(rows), [])
}

//todo
function createOneTestFooter() {
  return [
    row0('')
  ]
}

//todo
function createHeader({info}) {
  return [
    row2(''),
    row2(messageSummary(info)),
    row2(repeatDash(60)),
    row2('')
  ]
}

const createOneTest = concat(
  createOneTestHeader,
  createOneTestBody,
  createOneTestFooter
)

const createBody = compose(
  reduce(createOneTest),
  prop('results')
)

//todo
function createFooter() {
  return [
    row2(repeatStar(60)),
    row2('')
  ]
}

const createRows = concat(
  createHeader,
  createBody,
  createFooter
)

const intendRow = concatAndJoin(
  prop(repeatSpace, 'indent'),
  prop('text')
)

const renderToConsole = compose(
  console.log,
  join('\n'),
  map(intendRow),
  createRows
)

// === export all

module.exports = renderToConsole
