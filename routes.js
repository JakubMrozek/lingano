
module.exports = {
  stat: ['/default.css'],
  pages: {
    '/': require('./modules/homepage'),
    '/lists': require('./modules/lists')
  },
  error404: require('./modules/error404')
}
