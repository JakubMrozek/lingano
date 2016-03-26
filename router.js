const {configureRender} = require('./lib/static')
const css = configureRender(`${__dirname}/public`)
const {render} = require('./lib/render')

const Homepage = require('./pages/Homepage/Page')
const Error404 = require('./pages/Error404/Page')
const Lists = require('./pages/Lists/Page')


function router(request, response) {
  switch (request.url) {

    // css
    case '/default.css': {
      css(response, 200, request.url)
      break
    }

    // hmlt pages
    case '/': {
      response.end(render(Homepage()))
      break
    }
    case '/lists': {
      response.end(render(Lists()))
      break
    }

    // error
    default: {
      response.end(render(Error404()))
      break
    }
  }
}

module.exports = router
