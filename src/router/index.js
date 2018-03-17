import Vue from 'vue'
import Router from 'vue-router'
import Design from '@/pages/design'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'design',
      component: Design
    }
  ]
})
