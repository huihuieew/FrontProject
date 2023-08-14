<template>
    <div>
        <q-button @click="onClick(1)">第一个</q-button>
        <q-button @click="onClick(2)">第二个</q-button>
        <q-button @click="onClick(3)">第三个</q-button>
    </div>
</template>

<script setup>
const onClick = (num) => {
    console.log(`我是第${num}个自定义按钮`);
}

</script>