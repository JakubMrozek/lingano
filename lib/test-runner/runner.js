const render = require('./render')

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

function reduceAllSets(results, {result}) {
  results.ok += result.ok
  results.failed += result.failed
  return results
}

function getResults(tests) {
  const results = tests.map(runSet)
  const info = results.reduce(reduceAllSets, {ok: 0, failed: 0, all: 0})
  return {info, results}
}

function run(tests) {
  render(getResults(tests).results)
}

exports.run = run
