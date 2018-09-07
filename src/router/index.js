import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Base from '@/views/tabs/Base'

// 路由懒加载
const LightApps = () => import(/* webpackChunkName: "foo" */ '@/views/tabs/LightApps')
const WhiteList = () => import(/* webpackChunkName: "bar" */ '@/views/tabs/WhiteList')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Base,
          meta: { title: 'Base' },
        },
        {
          path: 'LightApps',
          component: LightApps,
        },
        {
          path: 'WhiteList',
          component: WhiteList,
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
