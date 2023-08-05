// 实现使用函数调用message组件的逻辑
import { createVNode, render } from 'vue'
import Message from './message.vue'
interface msg {
    duration?: number,
    message?: string
}

// 准备dom容器
const div = document.createElement('div')
div.setAttribute('class', 'message-container')
document.body.appendChild(div)

interface msg {
    type: string,
    text: string
}
// 定时器标识
let timer: NodeJS.Timer | undefined;

export default ({ type, text }: msg) => {
    // 1.导入组件
    // 2.根据组件创建虚拟节点
    const vnode = createVNode(Message, { type, text })
    // 3.准备一个dom容器
    // 4.把虚拟节点渲染挂载到dom容器中
    render(vnode, div)
    // 5.开启定时，移出dom容器内容
    clearTimeout(timer)
    timer = setTimeout(() => {
        render(null, div)
    }, 3000);
}