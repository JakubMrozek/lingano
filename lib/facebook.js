const url = require('url')
const {FACEBOOK_APP_ID, SERVER_URL} = require('../config/app')


function getLoginUrl() {
  return url.format({
    protocol: 'https',
    host: 'www.facebook.com',
    pathname: 'dialog/oauth',
    query: {
      client_id: FACEBOOK_APP_ID,
      redirect_uri: `${SERVER_URL}/auth`
    }
  })
}


exports.getLoginUrl = getLoginUrl
