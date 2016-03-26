const fs = require('fs')

function setHeaders(response, statusCode, contentType) {
  response.writeHead(statusCode, {
    'Content-Type': contentType
  })
}

function pipe(response, folder, fileName) {
  return fs.createReadStream(`${folder}/${fileName}`).pipe(response)
}

function render(folder, contentType) {
  return function renderTemplate(response, statusCode, fileName) {
    setHeaders(response, statusCode, contentType)
    pipe(response, folder, fileName)
  }
}

function configureRender(folder) {
  return render(folder, 'text/css')
}

exports.configureRender = configureRender
