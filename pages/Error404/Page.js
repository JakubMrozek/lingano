const {el} = require('../../lib/render')
const Layout = require('../Layout.component')

const Error404 = () => (
  Layout({title: 'Lingano - Stránka nenalezena'}, [
    el('h1', null, 'Stránka nebyla nalezena.')
  ])
)

module.exports = Error404
