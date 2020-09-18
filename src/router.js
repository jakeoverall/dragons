import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


function loadPage(pageName) {
  return () => import('./pages/' + pageName)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
