const {el, c} = require('../util')
const Layout = require('../Layout.component')


const Page = () => (
  c(Layout, {title: 'Lingano - Stránka nenalezena'}, [
    el('h1', null, 'Stránka nebyla nalezena.')
  ])
)


module.exports = Page
