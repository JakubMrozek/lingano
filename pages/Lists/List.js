const {el} = require('../../lib/render')

const List = ({id, name}) => (
  el('div', null, `${id}: ${name}`)
)

module.exports = List
