import { App } from 'vue';
import MyButton2 from './MyButton2.vue';

export { MyButton2 };

export default {
    install(app: App) {
        app.component('MyButton2', MyButton2)
    }
}