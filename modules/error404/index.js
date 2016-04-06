const Page = require('./Page.component')


module.exports = function error404({render, response}) {
  response.end(render(Page()))
}
