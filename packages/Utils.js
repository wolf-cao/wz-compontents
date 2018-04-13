const path = require('path')

exports.assetsPath = _path => {
  return path.posix.join('website', _path)
}

exports.trim = str => {
  return str ? str.replace(/(^\s*)|\s*$/g, '') : ''
}
