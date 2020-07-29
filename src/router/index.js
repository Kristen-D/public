import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/dashBoard'
import ApplyBoard from '@/components/applyBoard'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/dash',
      name: 'dashBoard',
      component: DashBoard
    },
    {
      path: '/apply',
      name: 'applyBoard',
      component: ApplyBoard
    }
  ]
})
