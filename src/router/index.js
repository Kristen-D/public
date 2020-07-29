import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/dashBoard'
import ApplyBoard from '@/components/applyBoard'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashBoard',
      component: DashBoard
    },
    {
      path: '/hello',
      name: 'helloWorld',
      component: HelloWorld
    },
    {
      path: '/apply',
      name: 'applyBoard',
      component: ApplyBoard
    }
  ]
})
