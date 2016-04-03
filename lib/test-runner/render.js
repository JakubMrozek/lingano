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


// === result messages

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
const messageHeader = ({name, result: {ok, failed}}) => (
  `${name} | OK: ${ok}, FAILED: ${failed}`
)


// === generate results

const resultOk = (result) => (
  compose(row4, messageOk)(result)
)

const resultFail = concat(
  compose(row4, messageFail),
  compose(row6, messageException)
)

const result = (result) => (
  result.ok ? resultOk(result) : resultFail(result)
)


// === one test results

const testHeader = (result) => (
  compose(row2, messageHeader)(result)
)

function testBody(test) {
  const results = test.result.log.map(result)
  return reduce()(results)
}

function testFooter() {
  return [
    row0('')
  ]
}

const testLayout = concat(
  testHeader,
  testBody,
  testFooter
)


// === render all tests

function header({info}) {
  return [
    row2(''),
    row2(messageSummary(info)),
    row2(repeatDash(60)),
    row2('')
  ]
}

const body = compose(
  reduce(testLayout),
  prop('results')
)

function footer() {
  return [
    row2(repeatStar(60)),
    row2('')
  ]
}



// === render to console

const indent = concatAndJoin(
  prop(repeatSpace, 'indent'),
  prop('text')
)

const layout = concat(
  header,
  body,
  footer
)

const renderToConsole = compose(
  console.log,
  join('\n'),
  map(indent),
  layout
)

// === export all

module.exports = renderToConsole
