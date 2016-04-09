const path = require('path')

exports.PORT = process.env.PORT || 8000
exports.PUBLIC_DIR = path.join(__dirname, '..', 'public')
