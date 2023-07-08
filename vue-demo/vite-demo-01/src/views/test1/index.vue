<template>
    <h3>hello test1</h3>
    <button>one</button>
    <button>two</button>
    <hr>
    <component :is="componentId"></component>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import one from 'components/test1/one.vue'

const componentId = ref(one)

</script>