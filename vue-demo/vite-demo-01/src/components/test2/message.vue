<template>
    <!-- vue动画：从上滑入且淡出 -->
    <Transition name="down">
        <div class="message" :style="style[type]" v-show="visible">
            <i class="iconfont" :class="[style[type].icon]"></i>
            <span class="text">{{ text }}</span>
        </div>
    </Transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const props: any = defineProps({
    type: {
        type: String,
        default: 'warn'
    },
    text: {
        type: String,
        default: 'hello'
    }
})
const style = {
    warn: {
        icon: 'icon-warning',
        color: 'pink',
        backgroundColor: 'deeppink',
        borderColor: '#ccc'
    },
    error: {
        icon: 'icon-warning',
        color: 'pink',
        backgroundColor: 'deeppink',
        borderColor: '#ccc'
    },
    success: {
        icon: 'icon-warning',
        color: 'pink',
        backgroundColor: 'deeppink',
        borderColor: '#ccc'
    }
}

const visible = ref(false);

onMounted(() => {
    visible.value = true;
})

</script>

<style scoped></style>