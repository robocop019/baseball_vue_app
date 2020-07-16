import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

import TeamsIndex from '../views/Teams/TeamsIndex.vue'
import TeamsShow from '../views/Teams/TeamsShow.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},

  {path: '/teams', name: 'teams-index', component: TeamsIndex},
  {path: '/teams/:id', name: 'teams-show', component: TeamsShow}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
