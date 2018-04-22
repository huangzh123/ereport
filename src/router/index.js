import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Design from '@/pages/design'
import magIndex from '@/pages/mag/index.vue'
import magMyForm from '@/pages/mag/my-chart.vue'
import magFormType from '@/pages/mag/chart-type.vue'
import magMyTemplate from '@/pages/mag/my-template.vue'
import role from '@/pages/mag/role.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/design',
      name: 'design',
      component: Design
    },
    {
      path: '/design-child',
      name: 'design-child',
      component: Design
    },
    {
      path: '/mag',
      component: magIndex,
      children: [
        {
          path: 'my-chart',
          name: 'my-chart',
          component: magMyForm
        },
        {
          path: 'chart-type',
          name: 'chart-type',
          component: magFormType
        },
        {
          path: 'my-template',
          name: 'my-template',
          component: magMyTemplate
        },
        {
          path: 'role',
          name: 'role',
          component: role
        }
      ]
    }
  ]
})
