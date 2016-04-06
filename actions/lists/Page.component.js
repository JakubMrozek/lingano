const {el, c} = require('../../lib/render')
const Layout = require('../Layout.component')


const List = ({id, name}) => {
  return (
    el('div', null, `${id}: ${name}`)
  )
}

const Lists = ({lists}) => {
  if (lists.length === 0) {
    return el('p', null, 'Nemáte vytvořeny žádné seznamy.')
  }
  return (
    el('div', null, (
      lists.map(list => c(List, list))
    ))
  )
}

const Page = ({lists}) => {
  return (
    c(Layout, {title: 'Lingano - Lists'}, [
      el('h1', null, 'Moje seznamy'),
      c(Lists, {lists})
    ])
  )
}


module.exports = Page
