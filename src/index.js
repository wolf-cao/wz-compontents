import Vue from 'vue'
import App from './app.vue'
import WZComponents from '../packages/index'

Vue.use(WZComponents)

new Vue({
  el: '#app',
  data: {
    message: 'hello'
  },
  template: '<App />',
  components: { App }
})
