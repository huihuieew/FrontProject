import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MyComponents from './plugins/my-components-base1.js'

createApp(App).use(MyComponents).mount('#app')
