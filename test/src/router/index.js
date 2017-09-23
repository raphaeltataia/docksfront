import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dock from '@/components/Dock'
import Company from '@/components/Company'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/docks/:id',
      name: 'Dock',
      component: Dock
    },
    {
      path: '/companys',
      name: 'Company',
      component: Company
    },
  ]
})
