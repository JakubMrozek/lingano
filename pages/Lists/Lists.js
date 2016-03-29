const {el, c} = require('../../lib/render')
const List = require('./List')


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


module.exports = Lists
