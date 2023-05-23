function createApp (rootComponent:Component , rootProps: object ): App {
    // 根组件，传给根组件的props
}
//  应用实例 app
import { createApp} from 'vue'
import myComponent from './myComponent.vue'
const app = createApp({
    // options
})
import { createApp } from 'vue'
import App from './App.vue'
import myPlugin from './plugins/myPlugin'
const app = createApp(App)
app.component('my-component',myComponent) // 注册自定义组件
const MyComponent = app.component('my-component') // 获取自定义组件
app.provide('message','hello')
app.directive('my-directive',{
    // 对象形式自定义指令钩子
})
app.directive('my-directive',() => {
    // 函数形式自定义指令
})
const myDirective = app.directive('my-directive') // 得到一个已注册的指令
app.use(myPlugin,options) // 含install方法的对象，或作为install方法的函数，options作为install方法的参数
console.log('app.config',app.config); // 包含app的配置设定
app.config.errorHandler = (err,instance,info) => {
    // 处理错误，例如：报告给一个服务
    // 为应用内未捕获错误，指定一个全局处理函数
}
app.config.warnHandler = (msg,instance, trace) => {
    // 为vue运行时警告指定一个自定义处理函数
    // msg，警告信息；instance，组件实例；trace，组件追踪字符串；
}
app.config.performance = true // false
app.config.compilerOptions // 运行时编译器的选项
app.config.compilerOptions.isCustomElement = (tag) => {
    return tag.startsWith('ion-') // 原生自定义元素 web-component
}
app.config.compilerOptions.whitespace = 'condense' // preserve 控制模板空格行为
app.config.compilerOptions.delimiters = ['${','}'] // ES6模板字符串 默认['{{','}}']
app.config.compilerOptions.comments = true // 移除html中的注释
app.config.globalProperties.msg = 'hello';
const app1 = createApp({
    msg: 'Vue',
    mixins: [
        {msg:'Hello'}
    ],
    mounted() {
        console.log('msg',this.$options.msg);
    }
});
app.config.optionMergeStrategies.msg = (parent,child) => {
    return (parent || '') + (child || '')
}
const version = app.version.split('.')[0]
app.mount('#app')
app.mount(document.body.firstChild)
