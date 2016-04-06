const path = require('path')
const {render} = require('./render')

//todo reqrite static
const {configureRender} = require('./static')
const css = configureRender(path.join(__dirname, '..', 'public'))


module.exports = function configureRender({pages, stat, error404}) {
  return function router(request, response) {
    if (stat.includes(request.url)) {
      return css(response, 200, request.url)
    }

    const params = {request, response, render}
    const page = pages[request.url]
    page ? page(params) : error404(params)
  }
}
