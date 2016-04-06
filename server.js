const http = require('http')
const {PORT} = require('./config/app')
const routes = require('./config/routes')
const router = require('./lib/router')

http.createServer(router(routes)).listen(PORT)
