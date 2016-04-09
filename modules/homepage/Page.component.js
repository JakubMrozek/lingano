const {el, c} = require('../../lib/view')
const Layout = require('../Layout.component')


const List = ({href}, children) => {
  return (
    el('li', null, [
      el('a', {href}, children)
    ])
  )
}

const Page = () => {
  return (
    c(Layout, {title: 'Lingano - Homepage'}, [
      el('h1', null, 'Lingano'),
      el('p', null, 'Tady jednou něco bude.'),
      el('ul', null, [
        c(List, {href: '/lists'}, 'Seznamy'),
        c(List, {href: '/lists/now'}, 'Vytvořit nový seznam')
      ])
    ])
  )
}


module.exports = Page
