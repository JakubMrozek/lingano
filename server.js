const http = require('http')

const config = require('./config.js')
const router = require('./router.js')

http.createServer(router).listen(config.PORT)
