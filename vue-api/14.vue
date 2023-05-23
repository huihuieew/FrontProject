<!-- 单文件组件 -->
<!-- Vue单文件组件SFC， *.vue -->
<!-- template script style custom1 顶级语言块 -->
<template lang="pug">
    //- 预处理器
    //- <!-- 在@vue/compiler-dom中预编译，附在组件render选项上 -->
    //- <div class="example">{{ msg }}</div>
    p {{ msg }}
</template>
<script lang="ts">
// 预处理器
// 脚本代码块将作为es模块执行
// 默认导出 vue组件的选项对象
export default {
    data() {
        return {
            msg: 'Hello world!'
        }
    }
}
</script>
<style>
/* scoped module */
.example {
    color: red;
}
</style>
<custom1>
    自定义块集成工具链指南
    this could be e.g. documentation for the component.
</custom1>
<docs></docs>
<page-query></page-query>
<gql></gql>
<i18n></i18n>

<!-- 根据文件名推导组件名 -->
<!-- 不同块各自的注释规则 -->
<!-- 顶层依照html注释语法 -->

<!-- src导入 -->
<!-- src导入 同js模块导入 相同路径解析规则 -->
<template src="./tempalte.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
<!-- 从npm包中导入一个文件 -->
<style src="todomvc-app-css/index.css"></style> 
<unit-test src="./unit-test.js"></unit-test>




















