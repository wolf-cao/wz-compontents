const path = require('path')

exports.assetsPath = _path => {
  return path.posix.join('website', _path)
}
