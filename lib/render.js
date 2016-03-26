function element(name, attrs = null, children = []) {
  return {name, attrs, children}
}

function renderAttrs(attrs) {
  return Object.keys(attrs || {}).map((key) => (
    ` ${key}="${attrs[key]}"`
  ))
}

function render({name, attrs, children}) {
  var html = `<${name}`
  html+= renderAttrs(attrs)
  html += '>'
  if (Array.isArray(children)) {
    //map is much slower then for loop, but i love it:-)
    html += children.map(render).join('')
  } else {
    html += children
  }
  html += `</${name}>`
  return html
}

exports.element = element
exports.el = element
exports.render = render
