const {render} = require('../util')
const Page = require('./Page.component')
const {loadLists} = require('./actions')


module.exports = function lists({serve}) {
  loadLists().then((lists) => {
    serve(render(Page({lists})))
  })
}
