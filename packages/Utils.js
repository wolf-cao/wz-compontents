const path = require('path')

exports.assetsPath = _path => {
  return path.posix.join('website', _path)
}

exports.trim = str => {
  return str ? str.replace(/(^\s*)|\s*$/g, '') : ''
}

exports.hasClass = (el, cls) => {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1)
    throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  }
  return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
}

exports.addClass = (el, cls) => {
  if (!el) return
  let curClass = el.className
  let classes = (cls || '').split(' ')
  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!this.hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

exports.removeClass = (el, cls) => {
  if (!el || !cls) return
  let classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (this.hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = this.trim(curClass)
  }
}

exports.getValueByPath = (object, prop) => {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

exports.sortby = (attr, data) => {
  return attr
    .map(item => {
      return {
        value: item,
        key: this.getValueByPath(item, data.sortkey)
      }
    })
    .sort((a, b) => {
      if (a.key > b.key) {
        return 1 * data.reverse
      } else if (a.key < b.key) {
        return -1 * data.reverse
      }
      return 0 * data.reverse
    })
    .map(item => item.value)
}
