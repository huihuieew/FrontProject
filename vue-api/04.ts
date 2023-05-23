// 响应式：核心
import {ref,computed,reactive, } from 'vue'

const count = ref(0)
const plusOne = computed(() => count.value +1)
console.log('plusone',plusOne.value);
const plustwo = computed({
    get() {
        return count.value + 2
    },
    set(val) {
        count.value = val 
    }
})
const obj = reactive({count})
console.log(obj.count === count.value); // true
obj.count++
count.value++
console.log(obj.count); // 2
console.log(count.value); // 2

// 响应式：工具
import {isRef,unref,toRef,toRefs,isProxy,isReactive,isReadonly } from 'vue'
isRef(count) // 检测某个值是否为ref
const val = isRef(count) ? count.value : count 
const val1 = unref(count)
const valref = toRef(val)
const {total,page} = toRefs(obj)
// 由reactive() readonly() shallowReactive() shallowReadonly()创建的代理
isProxy() // true
// 由reactive() shallowReactive()创建的代理
isReactive() // true
// 由readonly() shallowReadonly()创建的代理
isReadonly()

// 响应式：进阶
import { shallowRef,watchEffect,triggerRef } from 'vue'
const state = shallowRef({count:1})
state.value.count = 2
state.value = { count:2 }

const shallow = shallowRef({
    greet: 'hello, world.'
})
watchEffect(() => {
    console.log(shallow.value.greet);
})
shallow.value.greet = 'hello, universe'
triggerRef(shallow)