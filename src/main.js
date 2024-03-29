// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import qs from 'qs'


Vue.use(ant)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
