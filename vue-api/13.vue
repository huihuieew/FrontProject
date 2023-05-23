<!-- 内置内容 -->
<!-- 内置特殊属性 key ref is -->

<!-- key 在比较新旧节点，用于识别vnode -->

<template>
    <ul>
        <li v-for="item in items" :key="item.id"></li>
    </ul>
    <transition>
        <span :key="text">{{ text }}</span>
    </transition>
    <p ref="p">hello</p>
    <ChildComponent :ref="el => child = el" />
    <table>
        <!-- is 用于绑定动态组件 -->
        <tr :is="vue: my-row - component"></tr>
    </table>
</template>
<script setup>
// this.$refs.p
import { ref } from 'vue' // ref 组件挂载后才能访问
const p = ref(null)
</script>





