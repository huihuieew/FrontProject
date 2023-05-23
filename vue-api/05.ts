// 生命周期钩子函数
import { onMounted,onUpdated,onUnmounted,onBeforeMount,onBeforeUpdate,onBeforeUnmount,onErrorCapture,onRenderTracked,onRenderTriggered,onActivated,onDeactivated,onServerPrefetch} from 'vue'

// 依赖注册
import { ref,provide} from 'vue'
provide('foo','bar')
const count = ref(0)
provide('count',count)
import { inject} from 'vue'
const foo = inject('foo')
const count1 = inject('count')
const bar = inject('foo','default value')
const  baz = inject('foo',() => new Map())
const fn = inject('function',() => {}, false) // 表明传入的是个函数

