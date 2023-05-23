// 全局api
import { version,nextTick , } from 'vue'
console.log('version');

// nextTick(callback)  等待dom更新后执行callback

// defineComponent() 定义vue组件时，提供类型推导

// defineAsyncComponent() 定义异步组件，运行时懒加载的

// defineCustomComponent() 定义原生自定义元素web-component
import { defineCustomElement } from 'vue'
const MyVueElement = defineCustomElement({
    // 组件选项
})
// 注册自定义元素
customElements.define('my-vue-element',MyVueElement)


