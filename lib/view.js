
function element(name, attrs = null, children = []) {
  return {name, attrs, children}
}

function component(fn, attrs = null, children = []) {
  return fn(attrs, children)
}

function renderAttrs(attrs) {
  return Object.keys(attrs || {}).map((key) => (
    ` ${key}="${attrs[key]}"`
  ))
}

function render({name, attrs, children}) {
  let html = `<${name}`
  html+= renderAttrs(attrs)
  html += '>'
  if (Array.isArray(children)) {
    html += children.map(render).join('')
  } else {
    html += children
  }
  html += `</${name}>`
  return html
}

exports.el = element
exports.c = component
exports.render = render
