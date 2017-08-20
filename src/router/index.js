import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tenant from '@/components/Tenant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tenant/:id',
      name: 'Tenant',
      component: Tenant
    }
  ]
})
