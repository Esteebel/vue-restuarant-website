import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import homePage from '../components/homePage.vue'
import signUp from '../components/signUp.vue'
import loginPage from '../components/loginPage.vue'
import addResto from '../components/addResto.vue'
import updateResto from '../components/updateResto.vue'


const routes = [

  {
    name: 'Home',
    component: homePage,
    path: '/'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  
  {
    name: 'signUp',
    component: signUp,
    path: '/sign-up'
  },
  {
    name: 'loginPage',
    component: loginPage,
    path: '/login'
  },
  {
    name: 'addResto',
    component: addResto,
    path: '/add'
  },
  {
    name: 'updateResto',
    component: updateResto,
    path: '/update/:id'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
