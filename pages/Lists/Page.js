const {el} = require('../../lib/render')
const Layout = require('../Layout.component')

const Lists = require('./Lists')

const ListsPage = () => {
  const lists = []

  //todo - load from db
  lists.push({id: 1, 'name': 'Seznam 1'})
  lists.push({id: 2, 'name': 'Seznam 2'})
  lists.push({id: 3, 'name': 'Seznam 3'})

  return (
    Layout({title: 'Lingano - Lists'}, [
      el('h1', null, 'Moje seznamy'),
      Lists({lists})
    ])
  )
}

module.exports = ListsPage
