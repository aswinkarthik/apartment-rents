import Vue from 'vue'
import Router from 'vue-router'
import ListTenants from '@/components/ListTenants'
import ShowTenant from '@/components/ShowTenant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tenants',
      name: 'ListTenants',
      component: ListTenants
    },
    {
      path: '/tenants/:id',
      name: 'ShowTenant',
      component: ShowTenant
    }
  ]
})
