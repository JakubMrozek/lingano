const {el} = require('../../lib/render')


const List = ({id, name}) => {
  return (
    el('div', null, `${id}: ${name}`)
  )
}


module.exports = List
