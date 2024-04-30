import { createRouter, createWebHistory } from 'vue-router'
import { Home, Login } from '../pages/index'
import useAuthentication from '../composables/useAuthentication';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true },
        beforeEnter: (to, _, next) => {
            const { isAuthenticated } = useAuthentication()
            if (to.meta.requiresAuth && isAuthenticated) next()
            else next('login')
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        beforeEnter: (_, __, next) => {
            const { isAuthenticated } = useAuthentication()
            if (!isAuthenticated) next()
            else next('home')
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router