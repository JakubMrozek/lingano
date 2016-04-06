const http = require('http')
const {PORT} = require('./config')
const routes = require('./routes')
const router = require('./lib/router')

http.createServer(router(routes)).listen(PORT)
