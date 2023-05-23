// 渲染函数
// h() mergeProps() cloneVNode() isVNode() resolveComponent() resolveDirective()
// withDirectives() withModifiers()

// h() 创建虚拟dom节点 vnode
// 创建原生元素
import { h, mergeProps, cloneVNode, isVNode, resolveComponent, withDirective, withModifiers } from 'vue'
import Foo from './Foo.vue'
import MyComponent from './MyComponent.vue'
import ButtonCounter from './ButtonCounter.vue'
const foo = 'foo'
const bar = 'bar'
h('div')
h('div', { id: 'foo' })
h('div', { class: 'bar', innerHTML: 'hello' })
h('div', { class: [foo, { bar }], style: { color: 'red' } })
h('div', { onClick: () => { } })
h('div', { id: 'foo' }, 'hello')
h('div', 'hello')
h('div', [h('span', 'hello')])
h('div', ['hello', h('span', 'vue')])
// 创建组件
h(Foo, {
    someProp: 'hello', // equal to some-prop='hello'
    onUpdate: () => { }  // equal to @update='() => {}'
})
h(Foo, () => 'default slot')
h(MyComponent, null, {
    default: () => 'default slot',
    foo: () => h('div', 'foo'),
    bar: () => [h('span', 'one'), h('span', 'two')]
})

// mergeProps
const handleA = () => { }
const handleB = () => { }
const one = {
    class: 'foo',
    onClick: handleA
}
const two = {
    class: { bar: true },
    onClick: handleB
}
const merged = mergeProps(one, two)
// {
//     class:'foo bar',
//     onClick: [handleA,handleB]
// }

// cloneVNode
const original = h('div')
const cloned = cloneVNode(original, { id: 'foo' })

// isVNode
// isVNode(val:unknown):boolean

// resolveComponent() 按名称解析已注册的组件
h(resolveComponent(ButtonCounter))
// 按名称解析已注册的指令
// resolveDirective(name:string):Directive|undefined 

// withDirective 给VNode增加自定义指令
const pin = { // 自定义指令
    mounted() {
        //   ... 
    },
    updated() {
        // ... 
    }
}
// <div v-pin:top.animate="200"></div>
const vnode = withDirective(h('div'), [
    [pin, 200, 'top', { animate: true }]
])

// withModifiers vnode事件添加内置修饰符
const vnode1 = h('button', {
    onClick: withModifiers(() => {
        // ...
    }, ['stop', 'prevent'])
})












