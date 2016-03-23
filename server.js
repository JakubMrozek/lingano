const http = require('http')
const fs = require('fs')

const config = require('./config.js')


// libs
function contentType(mimeType) {
  return {'Content-Type': mimeType}
}

function setHtmlHeader(response, statusCode) {
  response.writeHead(statusCode, contentType('text/html'))
}

function getTemplatePath(name) {
  return `${__dirname}/templates/${name}.html`
}

function renderHtml(response, statusCode, templateName) {
  setHtmlHeader(response, statusCode)
  fs.createReadStream(getTemplatePath(templateName)).pipe(response)
}


function router(request, response) {
  switch (request.url) {

    // hmlt pages
    case '/': {
      renderHtml(response, 200, 'index')
      break
    }
    
    // error
    default: {
      renderHtml(response, 404, 'error404')
    }
  }
}


// server
http.createServer(router).listen(config.PORT)
