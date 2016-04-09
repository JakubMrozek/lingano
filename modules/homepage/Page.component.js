const {el, c} = require('../util')
const Layout = require('../Layout.component')


const List = ({href}, children) => (
  el('li', null, [
    el('a', {href}, children)
  ])
)

const Page = () => (
  c(Layout, {title: 'Lingano - Homepage'}, [
    el('h1', null, 'Lingano'),
    el('p', null, 'Tady jednou něco bude.'),
    el('ul', null, [
      c(List, {href: '/lists'}, 'Seznamy'),
      c(List, {href: '/lists/now'}, 'Vytvořit nový seznam')
    ])
  ])
)


module.exports = Page
