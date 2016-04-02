const {compose} = require('../util')


function composeHeader({ok, failed}) {
  return `ok: ${ok}, failed: ${failed}`
}

function createIndention(num) {
  return ' '.repeat(num)
}

function createOneTestHeader({name, result}) {
  const text = `${name} | ${composeHeader(result)}`
  return [
    {text, indent: 2}
  ]
}

function createOneTestBody({title, ok, ex}) {
  if (ok) {
    const text = `OK - ${title}`
    return [
      {text, indent: 4}
    ]
  } else {
    const text = `FAILED - ${title}`
    return [
      {text, indent: 4},
      {ex, indent: 6}
    ]
  }
}

function createOneTestFooter() {
  return [
    {text: ' ', indent: 0}
  ]
}

function createHeader(info) {
  const header = composeHeader(info)
  const line = '-'.repeat(60)
  return [
    {text: '', indent: 2},
    {text: header, indent: 2},
    {text: line, indent: 2},
    {text: '', indent: 2}
  ]
}

function createBody(info, results) {
  return results.reduce((prev, test) => {
    return prev.concat(
      createOneTestHeader(test)
    ).concat(
      test.result.log.map(createOneTestBody).reduce((prev, rows) => prev.concat(rows), [])
    ).concat(
      createOneTestFooter(test)
    )
  }, [])
}

function createFooter(info, results) {
  const line = '*'.repeat(60)
  return [
    {text: line, indent: 2},
    {text: '', indent: 2}
  ]
}

function createRows({info, results}) {
  return (
    [].concat(
      createHeader(info, results)
    ).concat(
      createBody(info, results)
    ).concat(
      createFooter(info, results)
    )
  )
}


// === render to console

function createOneRow({indent, text}) {
  const indention = ' '.repeat(indent)
  return `${indention}${text}`
}

function mapToString(rows) {
  return rows.map(createOneRow).join("\n")
}


const renderToConsole = compose(console.log, mapToString, createRows)

// === export all

module.exports = renderToConsole
