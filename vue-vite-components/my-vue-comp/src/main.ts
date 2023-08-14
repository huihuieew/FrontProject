import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import MyKit from '../packages';

createApp(App).use(router).use(MyKit).mount('#app')
