import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router';

const routes = [
    {
        path: '/components/Button',
        name: 'Button',
        title: '按钮',
        component: () => import(`../packages/Button/docs/README.md`),
    }
]

const routerConfig = {
    history: createWebHashHistory(),
    routes,
    scrollBehaviour(to: any, from: any) {
        if (to.path !== from.path) {
            return { top: 0 };
        }
    }
}
const router = createRouter(routerConfig as RouterOptions);

export default router;