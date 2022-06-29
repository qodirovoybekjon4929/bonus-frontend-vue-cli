import { createRouter, createWebHistory } from 'vue-router'

const token = localStorage.getItem("access_token")

const routes = token ?  [
  {
    path: '/',
    name: 'home-page',
    component: () => import("../views/home.vue")
  },
  {
    path: '/get-items-page',
    name: 'get-items-page',
    component: () => import("../views/get-items-page/get-items-page.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import("../views/not-found-page/404.vue")
  },
]
:
[
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login-page/login.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
