const path = require('path')

//module directory
const directory = path.join(__dirname, '..', 'modules')

module.exports = {
  stat: ['/default.css'],
  pages: {
    '/': require(`${directory}/homepage`),
    '/lists': require(`${directory}/lists`)
  },
  error404: require(`${directory}/error404`)
}
