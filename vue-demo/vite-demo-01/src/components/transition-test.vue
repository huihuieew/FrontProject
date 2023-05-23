<template>
    <button @click="up">up</button>
    <button @click="down">down</button>
    <TransitionGroup name="list" tag="ul">
        <li v-for="item in items" :key="item" class="cursor mb8 item">
            {{ item }}
        </li>
    </TransitionGroup>
    <button @click="pageup">up</button>
    <button @click="pagedown">down</button>
    <Transition mode="out-in">
        <p v-if="show">hello</p>
        <p v-else>vue</p>
    </Transition>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import { defineComponent } from 'vue'

const MyComponent = defineComponent({
    data() {
        return { count: 1 }
    },
    methods: {
        increment() {
            this.count++
        }
    }
})
console.log('component', MyComponent)

// transition group
const items = ref([1])
const up = () => {
    items.value.shift()
    setTimeout(() => {
        // nextTick
        items.value.push(items.value.length + 1)
    }, 500);
}
const down = () => {
    items.value.push(items.value.length + 1)
    nextTick(() => {
        // items.value.shift()
    })
    setTimeout(() => {
        // nextTick
        items.value.shift()
        // items.value.push(items.value.length + 1)
    }, 500);
}
// transition
const show = ref(true)
const type = ref('up')
const distance = computed(() => {
    if (type.value === 'up') return '-60px';
    if (type.value === 'down') return '60px';
}
)
const pageup = () => {
    type.value = 'up'
    show.value = !show.value
}
const pagedown = () => {
    type.value = 'down'
    show.value = !show.value
}

</script>

<style scoped>
@import url('../style/common.css');

/* .list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    /* transform: translateY(v-bind(distance)); */
/* } */

.list-leave-to {
    /* transform: translateY(v-bind(distance)); */
    transform: translateY(-30px);

}

.list-enter-from {
    /* transform: translateY(v-bind(-distance)); */
    transform: translateY(30px);

}

.v-enter-active,
.v-leave-active {
    /* transition: opacity 0.5s ease; */
    /* transition: transform 0.5s ease; */
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-leave-to {
    /* transform: translateY(-30px);  */
    /* transform: translateY(v-bind(distance)*-1); */

}

.v-enter-from {
    /* transform: translateY(30px); */
    transform: translateY(v-bind(distance));
}

.item {
    transform: translateY(0);
}
</style>