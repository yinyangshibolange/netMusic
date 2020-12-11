import {
    createRouter,
    createWebHistory
} from 'vue-router';
import dashboard from './dashboard'

const webHistory = createWebHistory()

export default createRouter({
    history: webHistory,
    routes: [
        {
            path: '',
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard
        }
    ]
})
