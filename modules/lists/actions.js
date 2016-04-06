
//load lists from database - simulation
exports.loadLists = function loadLists() {
  const lists = []
  lists.push({id: 1, 'name': 'Seznam 1'})
  lists.push({id: 2, 'name': 'Seznam 2'})
  lists.push({id: 3, 'name': 'Seznam 3'})

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(lists)
    }, 500)
  })
}
