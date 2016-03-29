const http = require('http')
const {PORT} = require('./config')
const router = require('./router')

http.createServer(router).listen(PORT)
