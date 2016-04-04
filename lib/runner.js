const {repeat} = require('./util')

const concat = (...args) => args.join('')

const space = repeat(' ')
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
}

function renderSet({name, tests}) {
  render(concat(space2, name))
  tests.forEach(renderTest)
  newLine()
}

function run(tests) {
  newLine()
  tests.forEach(renderSet)
}

exports.run = run
