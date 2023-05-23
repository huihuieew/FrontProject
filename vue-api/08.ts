// 选项式api
import Foo from './foo.vue'
import Bar from './bar.vue'

// 组合选项 provide inject mixins extends
const s = Symbol()
const mixin = {
    created() {
        console.log('1');
    }
}

export default {
    template: `<input v-focus />`,
    // 其它杂项 name inheritAttrs components directives
    name: 'demo', // 用于显式声明组件展示时的名称
    // 在<KeepAlive>通过include/exclude来匹配需要缓存的组件时，name需显式声明
    // 在3.2.34及以上版本中 setup单文件组件根据文件名生成name选项，无需手动声明
    inheritAttrs: true, // 启用透传行为
    components: {
        Foo,
        RenamedBar: Bar 
    },
    directives: {
        // 在模板中启用v-focus
        focus: {
            mounted(el) {
                el.focus()
            }
        }
    },
    data() {
        return {
            msg: 'foo'
        }
    },
    // provide: {
    //     foo: 'foo',
    //     [s] : 'bar'
    // }
    provide() {
        return {
            [s] : 'bar',
            msg: this.msg
        }
    },
    // inject: ['foo']
    inject: {
        foo: {
            from: 'bar', // 从不同名字的属性中注入
            // default: 'foo'
            default: () => [1,2,3] // 对于非原始数据类型的值，需使用工厂函数，同props
        }
    },
    mixins: [ // 包含组件选项对象的数组，将选项混入当前组件实例中
        // 接收一个对象数组，
        mixin // vue3通过setup实现组件间逻辑复用
    ],
}
const compA = { ... }
const compB = {
    extends: compA // 要继承的基类组件
}