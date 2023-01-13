import Vue from 'vue'
import VueRouter from 'vue-router'
import BikesView from '../views/BikesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BikesView',
    component: BikesView
  },
  {
    path: '/motorcycle/:id/:handle',
    name: 'BikeView',
    component: () => import(/* webpackChunkName: "BikeView" */ '../views/BikeView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
