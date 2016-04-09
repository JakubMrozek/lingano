const {el, c} = require('../../lib/view')
const Layout = require('../Layout.component')


const Page = () => {
  return (
    c(Layout, {title: 'Lingano - Stránka nenalezena'}, [
      el('h1', null, 'Stránka nebyla nalezena.')
    ])
  )
}


module.exports = Page
