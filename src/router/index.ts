import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue' // Asegúrate de importar ContactView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact', // Añade la ruta de contacto
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router