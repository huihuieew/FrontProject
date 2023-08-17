import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyButton2 from '@lib/core' // 新增

createApp(App).use(MyButton2).mount('#app')
