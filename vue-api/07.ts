// 选项式api

// 渲染选项 template render compilerOptions
export default {
    // template ?: string 用于声明组件的字符串模板
    // render选项存在时，template选项将被忽略
    template: `<div>hello, template</div>`,
    render() { // 用于编程式创建组件虚拟DOM树 VNode
        // 是字符串模板的一种替代
        return (
            `<div>hello, render.</div>`
        )
    },
    compilerOptions: { // 用于配置组件模板的运行时编译器选项
        isCustomElement : (tag) => (true),
        whitespace: 'condense', //  'preserve',
        delimiters: ['{{','}}'],
        comments: false
    }
}