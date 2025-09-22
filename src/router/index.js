import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Myservice from '../views/Myservice.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
  { path: '/Myservice', component: Myservice },
  { path: '/Projects', component: Projects },
  { path: '/contact', component: Contact },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
