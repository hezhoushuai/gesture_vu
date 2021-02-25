import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/gesture'
  },
  {
    path: '/gesture',
    name: 'GesturePages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GesturePages/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_ROUTER_PATH,
  routes
})

export default router
