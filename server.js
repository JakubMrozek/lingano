const http = require('http')
const fs = require('fs')

const config = require('./config.js')


// libs
function getContentType(contentType) {
  return {'Content-Type': contentType}
}

function setHeaders(response, statusCode, contentType) {
  response.writeHead(statusCode, getContentType(contentType))
}

function render(response, folder, templateName) {
  fs.createReadStream(`${folder}/${templateName}`).pipe(response)
}

function configureRender(folder, contentType) {
  return function renderTemplate(response, statusCode, fileName) {
    setHeaders(response, statusCode, contentType)
    render(response, folder, fileName)
  }
}


const renderCss = configureRender(`${__dirname}/public`, 'text/css')
const renderHtml = configureRender(`${__dirname}/templates`, 'text/html')


function router(request, response) {
  switch (request.url) {

    // css
    case '/default.css': {
      renderCss(response, 200, 'default.css')
      break
    }

    // hmlt pages
    case '/': {
      renderHtml(response, 200, 'index.html')
      break
    }

    // error
    default: {
      renderHtml(response, 200, 'error404.html')
    }
  }
}


// server
http.createServer(router).listen(config.PORT)
