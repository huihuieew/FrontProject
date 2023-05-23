<!-- 内置内容 -->

<!-- 内置特殊元素 -->
<!-- component slot template -->

<!-- <component></component> 用于渲染动态组件/元素的“元组件”  -->
<template>
    <component :is="view"></component>
</template>
<script>
import Foo from './Foo.vue'
import Bar from './Bar.vue'

export default {
    components: {Foo,Bar},
    data() {
        return {
            view: 'Foo'
        }
    },
}
</script>

<template>
    <component :is="Math.random() > 0.5 ? Foo : Bar"></component>
    <component :is="href ? 'a' : 'span'"></component>
</template>
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
    <component :is="isGroup ? 'TransitionGroup' : 'Transition'">
        ...
    </component>
</template>
<script>
import {Transition,TransitionGroup} from 'vue'
export default {
    components: {
        Transition,
        TransitionGroup
    }
}
</script>

<template>
    <component :is="tag" v-model="username"></component>
</template>
<script setup>
import { ref } from 'vue'

const tag = ref('input')
const username = ref('')
</script>











