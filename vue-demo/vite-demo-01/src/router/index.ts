import { createRouter, createWebHashHistory } from "vue-router";
// import type { RouteRecordRaw } from 'vue-router'
import routes from './route'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router