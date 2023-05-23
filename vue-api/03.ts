// 组合式api  setup
<script lang='ts' setup={props,context}>
context.slots  // 插槽
context.attrs  // 透传attributes
context.emit   // 触发事件
context.expose  // 暴露公共属性/函数

</script>

import { h,ref } from 'vue'
export default {
    setup(props,{attrs,slots,emit,expose }) {
        const count = ref(0)
        const increment = () => ++count.value
        expose({
            increment
        })
        return () => h('div',count.value)
    }
}





