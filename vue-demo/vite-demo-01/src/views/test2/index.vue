<template>
    <h3>hello test2</h3>
    <button @click="handleToggle(1)">message</button>
    <!-- <button @click="handleToggle(2)">clip path</button>
    <button @click="handleToggle(3)">border image</button>
    <button @click="handleToggle(4)">linear-gradient</button> -->
    <hr>
    <component :is="componentId"></component>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import one from 'components/test2/one.vue';
// import two from 'components/test2/two.vue';
// import three from 'components/test2/three.vue';
// import four from 'components/test2/four.vue';

const componentId = ref(one)

const handleToggle = (val: number) => {
    if (val == 1) {
        componentId.value = one
    }
    //  else if (val == 2) {
    //     componentId.value = two
    // } else if (val == 3) {
    //     componentId.value = three
    // } else if (val == 4) {
    //     componentId.value = four
    // }
}
</script>

<style>
button {
    margin: 0 8px;
}
</style>