import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const routes = [
  { path: '/', component: () => import('./views/GenerateDataView.vue') },
  { path: '/:pathMatch(.*)', component: () => import('./views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
console.log(router.getRoutes)
createApp(App)
  .use(createPinia())
  .use(router)
  .use(Toast, { position: POSITION.TOP_RIGHT })
  .mount('#app')
