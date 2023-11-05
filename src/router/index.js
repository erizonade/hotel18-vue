import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import halaman
import LandingPage from '../views/LandingPage.vue'

// import login
import LoginPage from '../views/LoginPage.vue'


// import booking
import BookingPage from '../views/BookingPage.vue'

// import Lokasi
import LokasiPage from '../views/LokasiPage.vue'

// import detail
import DetailPage from '../views/DetailPage.vue'

// import Lokasi
import RegistPage from '../views/RegistPage.vue'

//import LPlogged
import LPlogged from '../views/LPlogged.vue'

//import OrderPage
import OrderPage from '../views/OrderPage.vue'

//import SubmitPage
import SubmitPage from '../views/SubmitPage.vue'

//import SuksesPage
import SuksesPage from '../views/SuksesPage.vue'

//import CekOrder
import CekOrder from '../views/CekOrder.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/BookingPage',
    name: 'BookingPage',
    component: BookingPage
  },
  {
    path: '/LokasiPage',
    name: 'LokasiPage',
    component: LokasiPage
  },
  {
    path: '/DetailPage/:id',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/RegistPage',
    name: 'RegistPage',
    component: RegistPage
  },
  {
    path: '/LPlogged',
    name: 'LPlogged',
    component: LPlogged
  },

  {
    path: '/OrderPage/:id',
    name: 'OrderPage',
    component: OrderPage
  },
  {
    path: '/SubmitPage/:id',
    name: 'SubmitPage',
    component: SubmitPage
  },
  {
    path: '/SuksesPage',
    name: 'SuksesPage',
    component: SuksesPage
  },
  {
    path: '/CekOrder',
    name: 'CekOrder',
    component: CekOrder
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
