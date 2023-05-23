// ts工具类型
// PropType<T> 
// ComponentCustomProperties ComponentCustomOptions ComponentCustomProps
// CSSProperties

import type { PropType } from 'vue'

interface Book {
    title: string,
    author: string,
    year: number
}
export default {
    props: {
        book: {
            type: Object as PropType<Book>,
            required: true
        }
    }
}
// 类型扩展指南
import axios from 'axios'
declare module 'vue' {
    interface ComponentCustomProperties { // 组件实例上的属性
        $http: typeof axios
        $translate: (key: string) => string
    }
}

import { Route } from 'vue-router'
declare module 'vue' {
    interface ComponentCustomOptions { // 组件选项对象上的属性
        beforeRouteEnter?(to: any, from: any, next: () => void): void
    }
}

declare module 'vue' {
    interface ComponentCustomProps { // 自定义组件prop
        hello?: string
    }
}
export { }
// 即使组件上没有hello prop也能通过类型检查
import MyComponent from './MyComponent.vue'
// <MyComponent hello="world" />


// CSSProperties
declare module 'vue' {
    interface CSSProperties {
        [key: `--${string}`]: string
    }
}
// <div style={{'--bg-color':'blue'}} >
// <div :style="{'--bg-color':'blue'}">
// css变量至js template
// js变量至css
// <template>
//     <div class="text" > hello < /div>
// </template>
// <script>
// export default {
//     data() {
//         return {
//             color: 'red'
//         }
//     }
// }
// </script>
// <style scoped>
//     .text {
//     color: v-bind(color);
// }
// </style>















