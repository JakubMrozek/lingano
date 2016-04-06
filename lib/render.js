const {isObject, isFunction} = require('./util')


function element(name, attrs = null, children = []) {
  return {name, attrs, children}
}

function component(fn, attrs = null, children = []) {
  const obj = isObject(fn) ? fn : {}
  if (isFunction(fn)) {
    obj.render = fn
  }
  if (!isFunction(obj.render)) {
    throw new TypeError('Component render method is not defined.')
  }
  //todo componentWillMount, etc.
  return obj.render(attrs, children)
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

exports.element = element
exports.el = element
exports.component = component
exports.c = component
exports.render = render
