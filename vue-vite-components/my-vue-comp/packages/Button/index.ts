import { App, Plugin } from 'vue';
import Button from './src/index.vue';

export const ButtonPlugin: Plugin = {
    install(app: App) {
        app.component('q-button', Button);
    }
}
export {
    Button
}
// 全局调用
// import { createApp } from 'vue';
// import App from './app.vue';
// import MyKit from 'my-kit';
// createApp(App).use(MyKit);

// 局部调用
// import { Button } from 'my-kit';
// Vue.component('my-button', Button);