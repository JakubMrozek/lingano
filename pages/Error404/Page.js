const {el, c} = require('../../lib/render')
const Layout = require('../Layout')


const Error404 = () => {
  return (
    c(Layout, {title: 'Lingano - Stránka nenalezena'}, [
      el('h1', null, 'Stránka nebyla nalezena.')
    ])
  )
}


module.exports = Error404
