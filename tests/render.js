const {render, el, c} = require('../lib/render')

describe('lib/render')

it ('should render tree', () => {
  const elementA = el('a')
  const elementB = el('b', {x: 12}, 'my text')
  const elementC = el('c', null, [elementA, elementB])
  equals(render(elementC), '<c><a></a><b x="12">my text</b></c>')
})

it ('should render component', () => {
  const componentA = ({x}, children) => `${x}-${children}`
  equals(c(componentA, {x: 42}, 'some text'), '42-some text')
})

it ('should render component as object', () => {
  const componentB = {
    render({x}, children) {
      return `${x}-${children}`
    }
  }
  equals(c(componentB, {x: 42}, 'some text'), '42-some text')
})
