
function configureServe(request, response) {
  return function serve(html, statusCode = 200, contentType = 'text/html') {
    response.writeHead(statusCode, {
      'Content-Type': contentType
    })
    response.end(html)
  }
}

module.exports = configureServe
