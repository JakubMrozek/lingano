const {configureRender} = require('./lib/static')
const css = configureRender(`${__dirname}/public`)

const homepage = require('./pages/homepage')
const error404 = require('./pages/error404')


function router(request, response) {
  switch (request.url) {

    // css
    case '/default.css': {
      css(response, 200, request.url)
      break
    }

    // hmlt pages
    case '/': {
      homepage(request, response)
      break
    }

    // error
    default: {
      error404(request, response)
      break
    }
  }
}

module.exports = router
