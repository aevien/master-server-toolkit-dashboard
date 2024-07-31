
import './style.css'
import "bootswatch/dist/cosmo/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'

import LoginView from './views/LoginView.vue'
import DashboardView from './views/Dashboard.vue'
import { MstApi } from './core/MstApi'
import { ProvideInjectKeys } from './core/constants'

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

app.provide(ProvideInjectKeys.MST_API, new MstApi())

app.use(router)
app.use(pinia)
app.mount('#app')
