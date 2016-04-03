const {compose, map, join, isUndefined, prop, repeat, concat, concatAndJoin, reduce} = require('../util')


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
const messageException = ({name, actual, expected, operator}) => (
  `EXCEPTION - ${name}: ${actual} ${operator} ${expected}`
)
const messageHeader = ({ok, failed}) => (
  `ok: ${ok}, failed: ${failed}`
)


const testOk = (result) => [
  row4(messageOk(result))
]

const testFail = (result) => [
  row4(messageFail(result)),
  row4(messageException(result))
]

const testResult = (result) => (
  result.ok ?
  testOk(result) :
  testFail(result)
)

function createOneTestHeader({name, result}) {
  return [
    row2(`${name} | ${messageHeader(result)}`)
  ]
}

function createOneTestBody(test) {
  return test.result.log.map(testResult).reduce((prev, rows) => prev.concat(rows), [])
}

function createOneTestFooter() {
  return [
    row0('')
  ]
}

function createHeader({info}) {
  return [
    row2(''),
    row2(messageHeader(info)),
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
