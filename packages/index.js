import WZtables from './tables/index'
import WZsiderList from './siderList/index'
import WZsearcher from './searcher/index'
import WZpopMenus from './popMenus/index'
import WZcusList from './cusList/index'
import WZcusListItem from './cusListItem/index'
import WZbarProgress from './barProgress/index'

const components = [
  WZtables,
  WZsiderList,
  WZsearcher,
  WZpopMenus,
  WZcusList,
  WZcusListItem,
  WZbarProgress
]

function install(Vue) {
  components.map(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WZtables,
  WZsiderList,
  WZsearcher,
  WZpopMenus,
  WZcusList,
  WZcusListItem,
  WZbarProgress
}
