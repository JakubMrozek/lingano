const {el, c} = require('../../lib/render')
const Layout = require('../Layout')
const Lists = require('./Lists')


//todo load from db
const lists = []
lists.push({id: 1, 'name': 'Seznam 1'})
lists.push({id: 2, 'name': 'Seznam 2'})
lists.push({id: 3, 'name': 'Seznam 3'})

const ListsPage = () => {
  return (
    c(Layout, {title: 'Lingano - Lists'}, [
      el('h1', null, 'Moje seznamy'),
      c(Lists, {lists})
    ])
  )
}


module.exports = ListsPage
