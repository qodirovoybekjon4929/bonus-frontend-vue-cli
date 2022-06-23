import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: () => import("../views/home.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import("../views/not-found-page/404.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
