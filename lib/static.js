const fs = require('fs')


function setHeaders(response, statusCode, contentType) {
  response.writeHead(statusCode, {
    'Content-Type': contentType
  })
}

function pipe(response, folder, fileName) {
  return fs.createReadStream(`${folder}/${fileName}`).pipe(response)
}

function configureStatic(publicDir) {
  return function renderStatic(response, fileName) {
    //todo supoort for other content types
    const contentType = 'text/css'

    setHeaders(response, 200, contentType)
    pipe(response, publicDir, fileName)
  }
}


module.exports = configureStatic
