import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import MyUI from './components/test2/index'

createApp(App).use(MyUI).use(router).mount('#app')
