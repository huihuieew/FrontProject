import home from 'views/home/index.vue'
import test1 from 'views/test1/index.vue'
import test2 from 'views/test2/index.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: home
        // component: () => import('@/views/home/index.vue')

    },
    {
        path: '/test1',
        name: 'test1',
        component: test1
        // component: () => import('@/views/test1/index.vue')
    },
    {
        path: '/test2',
        name: 'test2',
        component: test2
    },
]

export default routes