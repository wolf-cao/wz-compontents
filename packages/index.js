import WZtables from './tables/index'

const components = [WZtables]

function install(Vue) {
  components.map(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install, WZtables }
