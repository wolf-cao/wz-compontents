import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import AppRouters from './router.js'
import WZComponents from '../packages/index'

Vue.use(WZComponents)
Vue.use(VueRouter)

const routes = AppRouters

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  router
})
