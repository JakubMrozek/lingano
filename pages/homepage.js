const {el, render} = require('../lib/render')
const layout = require('./layout')


function homepage(request, response) {
  const html = layout('Lingano - Homepage', [
    el('h1', null, 'Lingano'),
    el('p', null, 'Tady jednou něco bude.')
  ])
  response.end(render(html))
}


module.exports = homepage
