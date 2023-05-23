// 选项式api

// 状态选项 data props methods watch computed emits expose
// 渲染选项 template render compilerOptions
// 组合选项 provide inject mixins extends
// 其它杂项 name inheriteAttr components directives
// 生命周期选项

this.$data
this.$props // 表示组件已解析的props对象
this.$el // 该组件实例管理的dom根节点 $el在挂载前都是undefined
this.$options // 当前组件的组件选项
this.$parent // parentVue || null
this.$root // 当前组件树的根组件实例
this.$slots // 表示父组件传入插槽的对象 this.$slots.default this.$slots.header
this.$refs // 包含dom元素/组件实例的对象
this.$attrs // 包含组件所有透传attributes的对象
this.$watch() // 用于命令式创建侦听器
this.$watch(
    () => this.a + this.b ,
    (val,oldval) => {
        // do something
    }
)
const cb = () => {}
const unwatch = this.$watch('a',cb)
unwatch()
this.$emit('foo',1,2,3) // 在当前组件触发自定义事件
this.$forceUpdate() // 强制该组件重新渲染
this.$nextTick(cb) // 绑定在实例上的nextTick()
