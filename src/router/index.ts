import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/quiz-easy',
      name: 'quiz-easy',
      component: () => import('@/views/Quiz.vue'),
      props: { difficulty: 'easy' },
      meta: { requiresAuth: true },
    },
    {
      path: '/quiz-medium',
      name: 'quiz-medium',
      component: () => import('@/views/Quiz.vue'),
      props: { difficulty: 'medium' },
      meta: { requiresAuth: true },
    },
    {
      path: '/quiz-hard',
      name: 'quiz-hard',
      component: () => import('@/views/Quiz.vue'),
      props: { difficulty: 'hard' },
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  linkActiveClass: 'bg-gray-900 text-white',
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()

  if (to.meta.requiresAuth && to.name !== 'Login' && !user.isLoggedIn)
    next({ name: 'login' })
  else next()
})
