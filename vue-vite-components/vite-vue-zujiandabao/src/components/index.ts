import { App } from 'vue';

// 加载src/components下的全部vue文件
const components: Record<string, any> = import.meta.glob('./**/*.vue', { eager: true });

export default {
    install(app: App) {
        for (let key in components) {
            let component = components[key].default;
            app.component(component.name, component);
        }
    }
}