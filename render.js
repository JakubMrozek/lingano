const fs = require('fs')

function setHeaders(response, statusCode, contentType) {
  response.writeHead(statusCode, {
    'Content-Type': contentType
  })
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


exports.css = configureRender(`${__dirname}/public`, 'text/css')
exports.html = configureRender(`${__dirname}/templates`, 'text/html')
