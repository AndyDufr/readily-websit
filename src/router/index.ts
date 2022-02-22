import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money' //重定向
  },
  {
    path: '/money',
    name: 'Money',
    component: () => import('../views/Money.vue')
  },
  {
    path: '/labels',
    name: 'Labels',
    component: () => import(/* webpackChunkName: "about" */ '../views/Labels.vue')
  },
  {
    path: '/statistics',
    name: '/Statistics',
    component: () => import('../views/Statistics.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
