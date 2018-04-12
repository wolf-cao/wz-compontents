import WZbarProgress from './src/main.vue'

WZbarProgress.install = Vue => {
  Vue.component(WZbarProgress.name, WZbarProgress)
}

export default WZbarProgress
