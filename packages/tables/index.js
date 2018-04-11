import WZtables from './src/main.vue'

WZtables.install = Vue => {
  Vue.component(WZtables.name, WZtables)
}

export default WZtables
