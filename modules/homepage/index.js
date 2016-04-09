const {render} = require('../util')
const Page = require('./Page.component')


module.exports = function homepage({serve}) {
  serve(render(Page()))
}
