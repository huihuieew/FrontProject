<template>
    <button class="my-button" @click="$emit('click', $event)">
        <slot>点击</slot>
    </button>
</template>

<script lang="ts" setup>


defineEmits(['click'])

const handleClick = (e) => {
    console.log('e', e);
}

</script>

<style scoped>
.my-button {
    border: 1px solid red;
}
</style>