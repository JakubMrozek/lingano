const {el} = require('../render')

function layout(title, content) {

  const head = el('head', null, [
    el('title', null, title),
    el('meta', {charset: 'utf-8'}),
    el('meta', {viewport: 'width=device-width, initial-scale=1'}),
    el('link', {rel: 'stylesheet', href: '/default.css'})
  ])

  const body = el('body', null, [
    el('div', {'class': 'content'}, [
      el('header'),
      el('main', null, content),
      el('footer', null, [
        el('p', {'class': 'container'}, 'Made with ♥ by Jakub Mrozek')
      ])
    ])
  ])

  return el('html', {lang: 'cs'}, [head, body])
}


module.exports = layout
