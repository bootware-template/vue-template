import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import About from '@/components/pages/About.vue';
import SideMenuPage from '@/components/pages/SideMenuPage.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'SideMenuPage',
    component: SideMenuPage,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
