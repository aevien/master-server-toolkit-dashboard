
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'

import LoginView from './views/LoginView.vue'
import DashboardView from './views/Dashboard.vue'

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
