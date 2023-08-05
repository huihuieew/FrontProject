<template>
    <div>
        <!-- 基础动画 -->
        <div class="progress_container" v-show="progressVisible">
            <div class="progress_bar"></div>
        </div>
        <!-- 动态斑马线进度条 -->
        <div class="base_progress">
            <div class="active_progress"></div>
        </div>
        <button @click="open">start</button>
        <!-- 终极版进度条 -->
        <div class="progress">
            <div class="shadow position_center font"></div>
            <div class="bar position_center font"></div>
        </div>
        <button @click="open2">start</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'
const progressVisible = ref(true)

let n = 0;
let rootStyle = document.documentElement.style
let timer2: NodeJS.Timer | undefined
const open2 = function () {
    timer2 = setInterval(() => {
        n = n % 100 + 1
        // rootStyle.setProperty('--progress-number', `${n}%`)
        rootStyle.setProperty('--progress-number', `${100 - n}%`)
        rootStyle.setProperty('--progress-string', `"${n}%"`)
    }, 84)
}

const widthbar = ref('0px')
let timer: any = null
const open = function () {
    timer = setInterval(() => {
        let w = Number(widthbar.value.replace('px', ''))
        if (w >= 300) {
            widthbar.value = '0px'
        } else {
            w++;
            widthbar.value = w + 'px'
        }
    }, 84)
}
onBeforeUnmount(() => {
    clearInterval(timer)
    clearInterval(timer2)
})
</script>

<style scoped>
:root {
    --progress-number: 50%;
    --progress-string: "50%";
}

body {
    background-color: antiquewhite;
}

.progress {
    box-shadow: 0 0 10px #666, 0 0 10px #666 inset;
    /* 画一个立方体 */
    /* width: 200px; */
    width: 400px;
    height: 60px;
    border: 4px solid #fff;
    border-radius: 10px;
    position: relative;
    margin: auto;
}

.position_center {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.font {
    font-size: 1.5em;
    font-weight: 700;
    text-shadow: 0 0 2px #666;
}

.shadow {
    color: yellow
}

.bar {
    /* color: black; */
    color: #555;
    background-color: yellow;
    /* background-image: linear-gradient(135deg, transparent 25%, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 50%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.1) 0); */
    /* 绘制斑马纹 */
    background-image: linear-gradient(135deg, transparent 25%, rgba(0, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.1) 50%, transparent 50%, transparent 75%, rgba(0, 0, 0, 0.1) 75%);
    /* 斑马纹变细 */
    background-size: 60px;
    /* 斑马纹动起来 */
    animation: move 2s linear infinite;
    /* 进度条读条 */
    /* clip-path: polygon(0 0, var(--progress-number) 0, var(--progress-number) 101%, 0 101%); */
    clip-path: inset(0 var(--progress-number) 0 0 round 6px);
    transition: clip-path 84ms linear;
}

@keyframes move {
    100% {
        background-position-y: 60px;
    }
}

.bar::after,
.shadow::after {
    content: var(--progress-string);
}

.progress_container {
    width: 150px;
    height: 10px;
    /* border: 2px solid red; */
    border-radius: 10px;
}

.progress_bar {
    height: 100%;
    border-radius: 10px;
    background-color: aquamarine;
    width: 20px;
    animation-name: progressBar;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
}

@keyframes progressBar {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}

.base_progress {
    position: relative;
    width: 300px;
    height: 14px;
    border-radius: 7px;
    border: 1px solid red;
    overflow: hidden;
}

.active_progress {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: v-bind(widthbar);
    /* width: 150px; */
    height: 100%;
    border-radius: 2 px;
    /* background-color: aquamarine; */
    background: repeating-linear-gradient(135deg, blue, blue 10px, pink 10px, pink 20px);
    background-size: 28px 100%;
    animation: progressAnimation 1s linear infinite;
}

@keyframes progressAnimation {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: 28px 0;
    }
}
</style>