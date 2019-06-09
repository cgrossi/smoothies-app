import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddSmoothie from './views/AddSmoothie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    }
  ]
})
