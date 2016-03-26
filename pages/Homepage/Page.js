const {el} = require('../../lib/render')
const Layout = require('../Layout.component')

const Homepage = () => (
  Layout({title: 'Lingano - Homepage'}, [
    el('h1', null, 'Lingano'),
    el('p', null, 'Tady jednou něco bude.'),
    el('ul', null, [
      el('li', null, [
        el('a', {href: '/tester'}, 'Spustit testování')
      ]),
      el('li', null, [
        el('a', {href: '/lists'}, 'Seznamy')
      ]),
      el('li', null, [
        el('a', {href: '/lists/new'}, 'Vytvořit nový seznam')
      ])
    ])
  ])
)

module.exports = Homepage
