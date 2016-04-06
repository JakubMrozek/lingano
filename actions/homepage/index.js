const Page = require('./Page.component')


module.exports = function homepage({render, response}) {
  response.end(render(Page()))
}
