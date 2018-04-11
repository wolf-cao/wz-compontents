import Vue from 'vue'
import App from './app.vue'
import WZComponents from '../packages/index'

Vue.use(WZComponents)

new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
