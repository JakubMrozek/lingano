//todo - refactor

const tests = [{
  name: 'default',
  tests: []
}]

function lastSetTests() {
  return tests[tests.length - 1].tests
}

function describe(name) {
  tests.push({name, tests: []})
}

function it(title, test) {
  lastSetTests().push({title, test})
}

function runTest({title, test}) {
  const result = {title, ok: true}
  try {
    test()
  } catch (ex) {
    result.ex = ex
    result.ok = false
  }
  return result
}

function reduceSet(results, test) {
  const result = runTest(test)
  results.log.push(result)
  if (result.ok) {
    ++results.ok
  } else {
    ++results.failed
  }
  return results
}

function runSet({name, tests}) {
  const result = tests.reduce(reduceSet, {ok: 0, failed: 0, log: []})
  return {name, result}
}

function removeEmptySets({tests}) {
  return tests.length > 0
}

function reduceAllSets(results, {result}) {
  results.ok += result.ok
  results.failed += result.failed
  return results
}

function getResults(tests) {
  const results = tests.filter(removeEmptySets).map(runSet)
  const info = results.reduce(reduceAllSets, {ok: 0, failed: 0, all: 0})
  return {info, results}
}

function composeHeader(ok, failed) {
  return `ok: ${ok}, failed: ${failed}`
}

function run() {
  const {info, results} = getResults(tests)

  const header = composeHeader(info.ok, info.failed)

  console.log('-'.repeat(header.length))
  console.log(header)
  console.log('-'.repeat(header.length))
  console.log('')

  results.forEach(({name, result}) => {
    console.log(`  ${name} | ${composeHeader(result.ok, result.failed)}`)
    result.log.forEach(({title, ok, ex}) => {
      if (ok) {
        console.log(`    OK - ${title}`)
      } else {
        console.log(`    FAILED - ${title}`)
        console.log(`      ${ex}`)
      }
    })
    console.log(' ')
  })
}


exports.describe = describe
exports.it = it
exports.run = run
