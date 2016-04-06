const {configureRender} = require('./lib/static')
const css = configureRender(`${__dirname}/public`)
const {render} = require('./lib/render')

//actions
const homepage = require('./modules/homepage')
const error404 = require('./modules/error404')
const lists = require('./modules/lists')


function router(request, response) {
  switch (request.url) {

    // css
    case '/default.css': {
      css(response, 200, request.url)
      break
    }

    // hmlt pages
    case '/': {
      homepage({request, response, render})
      break
    }
    case '/lists': {
      lists({request, response, render})
      break
    }

    // error
    default: {
      error404({request, response, render})
      break
    }
  }
}

module.exports = router
