const {css, html} = require('./render.js')

function router(request, response) {
  switch (request.url) {

    // css
    case '/default.css': {
      css(response, 200, 'default.css')
      break
    }

    // hmlt pages
    case '/': {
      html(response, 200, 'index.html')
      break
    }

    // error
    default: {
      html(response, 200, 'error404.html')
    }
  }
}

module.exports = router
