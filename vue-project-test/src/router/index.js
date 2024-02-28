import { createRouter, createWebHistory } from 'vue-router'
import AuthentificationView from '../views/AuthentificationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authentification',
      component: AuthentificationView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('../views/NavbarView.vue')
    },
    {
      path: '/deconnexion',
      name: 'Deconnexion',
      component: () => import('../views/DeconnexionView.vue')
    },
  ]
})

export default router
