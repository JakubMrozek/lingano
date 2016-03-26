const assert = require('assert')
const {render, el} = require('../render')

// render html
const elementA = el('a')
const elementB = el('b', {x: 12}, 'my text')
const elementC = el('c', null, [elementA, elementB])
assert.equal(render(elementC), '<c><a></a><b x="12">my text</b></c>')
