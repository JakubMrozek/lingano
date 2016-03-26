const {el, render} = require('../lib/render')
const layout = require('./layout')


function error404(request, response) {
  const html = layout('Lingano - Stránka nenalezena', [
    el('h1', null, 'Stránka nebyla nalezena.')
  ])
  response.end(render(html))
}


module.exports = error404
