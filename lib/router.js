const {PUBLIC_DIR} = require('../config/app')
const configureServe = require('./serve')
const configureStatic = require('./static')


const renderStatic = configureStatic(PUBLIC_DIR)

module.exports = function configureRender({pages, stat, error404}) {
  return function router(request, response) {
    if (stat.includes(request.url)) {
      return renderStatic(response, request.url)
    }

    const serve = configureServe(request, response)
    const params = {
      request,
      response,
      serve
    }
    const page = pages[request.url]
    page ? page(params) : error404(params)
  }
}
