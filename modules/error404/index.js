const {render} = require('../util')
const Page = require('./Page.component')


module.exports = function error404({serve}) {
  serve(render(Page()))
}
