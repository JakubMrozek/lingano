const Page = require('./Page.component')
const {loadLists} = require('./actions')


module.exports = function lists({render, response}) {
  loadLists().then((lists) => {
    response.end(render(Page({lists})))
  })
}
