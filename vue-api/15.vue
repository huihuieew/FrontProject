<!-- 单文件组件SFC -->
<script lang="ts" setup>
import { useCssModule } from 'vue'
useCssModule() // 返回module中的class
useCssModule('classes') // 返回module=classes中的class
const theme = {
    color: 'red'
}
const color = 'red'
const weight = 600
</script>
<script>
export default {
    data() {
        return {
            color: 'red'
        }
    }
}
</script>
<template>
    <p>hello</p>
    <p :class="classes.red"></p>
    <p :class="$style.red">this should be red</p>
</template>

<!-- 单文件组件css功能 -->
<!-- 组件作用域css -->
<style scoped>
.a :deep(.b) {
    /* .a[data-v-f3derdasds] .b */
    margin: 8px;
}

::slotted(div) {
    color: red;
}

:global(.red) {
    color: red;
}

p {
    font-size: 28px;
    font-weight: v-bind(weight);
}
</style>
<style >
p {
    color: v-bind("theme.color");
    color: v-bind('color')
}
</style>
<style module>
.red {
    color: red;
}
</style>
<style module="classes">
.red {
    color: red;
}
</style>




























