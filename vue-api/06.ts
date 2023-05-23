// 选项式api

// 状态选项 data props computed methods watch emits expose
export default { 
    data() { // 用于声明组件的初始响应式状态
        return {
            a: 1,
            b: 2,
            c:{
                d: 4
            },
            e: 5,
            f: 6
        }
    },
    created() {
        console.log(this.a);
        console.log(this.$data); // {a:1}
        this.plus()
        this.a = 3
        this.$emit('check')
    },
    props: { // 用于声明一个组件的props
        height: Number,
        age: {
            type: Number,
            default: 0,
            required: true,
            validator(val) {
                return val >= 0
            }
        }
    },
    computed: { // 用于声明在组件实例上暴露的计算属性
        aDouble: (vm) => vm.a * 2,
        aThree() {
            return this.a * 3
        },
        aPlus: {
            get() {
                return this.a + 1
            },
            set(v) {
                this.a = v - 1
            }
        }
    },
    mthods: { // 用于声明要混入到组件实例的方法
        plus() {
            this.a++
        },
        someMethod() {
            console.log('changed');
        },
        handle1() {
            console.log('handle 1 triggered');
        },
        publicMethod() {
            // dosomething
        },
        privateMethod() {
            // dosomething inside
        }
    },
    watch: { // 用于声明在数据更改时调用的侦听回调
        a(val,oldVal) {
            console.log(`new: ${val}, old: ${oldVal}`);
        },
        b: 'someMethod',
        c: {
            handler(val,oldVal) {
                console.log('c changed');
            },
            deep: true
        },
        'c.d': 'someMethod',
        e: {
            handler(val,oldVal) {
                console.log('e changed');
            },
            immediate: true
        },
        f : [
            'handle1',
            function handle2(val,oldVal) {
                console.log('handle2 triggered');
            },
            function handle3(val,oldVal) {
                console.log('handle3 triggered');
            }
        ]
    },
    // emits: ['check']
    emits: { // 用于声明由组件触发的自定义事件
        click: null, // 没有验证函数,
        submit(payload) { // 验证函数
            if (payload.email && payload.password) {
                return true
            } else {
                console.warn(`Invalid submit event payload.`)
                return false;
            }
        }
    },
    expose: ['publicMethod']
}

