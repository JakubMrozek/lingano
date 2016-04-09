const path = require('path')


exports.PORT = process.env.PORT || 8000
exports.IS_DEV = process.env.NODE_ENV !== 'production'
exports.SERVER_URL = 'http://lingano.com'
exports.PUBLIC_DIR = path.join(__dirname, '..', 'public')
exports.FACEBOOK_APP_ID = '346530262093922'
exports.FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET
