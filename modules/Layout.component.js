const {el} = require('../lib/view')


const Layout = ({title}, content) => {
  return (
    el('html', {lang: 'cs'}, [
      el('head', null, [
        el('title', null, title),
        el('meta', {charset: 'utf-8'}),
        el('meta', {viewport: 'width=device-width, initial-scale=1'}),
        el('link', {rel: 'stylesheet', href: '/default.css'})
      ]),
      el('div', {'class': 'content'}, [
        el('header'),
        el('main', null, content),
        el('footer', null, [
          el('p', {'class': 'container'}, 'Made with ♥ by Jakub Mrozek')
        ])
      ])
    ])
  )
}


module.exports = Layout
