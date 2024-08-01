
import './style.css'
import "bootswatch/dist/cosmo/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'

import LoginView from './views/LoginView.vue'
import DashboardView from './views/Dashboard.vue'
import ModuleView from './views/ModuleView.vue'

import { MstApi } from './core/MstApi'
import { ProvideInjectKeys } from './core/constants'
import { MstServerInfo } from './core/interfaces'

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },
  { path: '/module/:id', name: 'module', component: ModuleView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
const pinia = createPinia()

app.provide(ProvideInjectKeys.MST_API, new MstApi())
app.provide(ProvideInjectKeys.MST_SERVER_INFO, reactive<MstServerInfo>({}))

app.use(router)
app.use(pinia)
app.mount('#app')
