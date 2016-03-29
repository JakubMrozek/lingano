const {equal} = require('assert')
const {render, el, c} = require('../lib/render')

//render method
const elementA = el('a')
const elementB = el('b', {x: 12}, 'my text')
const elementC = el('c', null, [elementA, elementB])
equal(render(elementC), '<c><a></a><b x="12">my text</b></c>')

//component as a function
const componentA = ({x}, children) => `${x}-${children}`
equal(c(componentA, {x: 42}, 'some text'), '42-some text')

//component as a object
const componentB = {
  render({x}, children) {
    return `${x}-${children}`
  }
}
equal(c(componentB, {x: 42}, 'some text'), '42-some text')
