<template>
    <div class="flex">
        <div class="base-box base-gradient">four</div>
        <div class="base-box multiple-gradient">four</div>
        <div class="base-box stops-gradient">four</div>
        <div class="base-box stops-gradient2">four</div>
        <div class="base-box clip-corner1">four</div>
        <div class="base-box clip-corner2">four</div>
        <div class="base-box clip-corner3">four</div>
        <hr>
        <div class="base-box gradients1">four</div>
        <div class="base-box gradients2">four</div>
        <div class="base-box repeating1">four</div>
        <div class="base-box repeating2">four</div>
        <div class="base-box repeating3">four</div>
        <hr>
        <div class="base-box radial1">four</div>
        <div class="base-box radial2">four</div>
    </div>
    <!-- 进度条动画 -->
    <div class="progress_outer">
        <div class="progress_bg"></div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.base-box {
    width: 100px;
    height: 100px;
    background-color: antiquewhite;
    color: white;
}

.base-gradient {
    background-image: linear-gradient(blue, red);
}

.multiple-gradient {
    background-image: linear-gradient(45deg, blue, red, green);
}

.stops-gradient {
    width: 200px;
    /* | 互斥, []范围, ? 表示可选,  */
    /* linear-gradient(angle | to <side-or-corner>,<color> [<color-stop-length>]? )  */
    /* color-stop-length 设置单个值 0-10px blue, 10px-40px 过渡, 40-170px过渡, 170px-200px green */
    background-image: linear-gradient(90deg, blue 10px, red 40px, green 170px);
}

.stops-gradient2 {
    width: 200px;
    /* | 互斥, []范围, ? 表示可选,  */
    /* linear-gradient(angle | to <side-or-corner>,<color> [<color-stop-length>]? )  */
    /* color-stop-length 设置单个值 0-20% green, 20%-50% 过渡, 50%-70% red, 70%-80% 过渡, 80%-100%
     yellow */
    background-image: linear-gradient(90deg, green 20%, red 50% 70%, yellow 80%);
}

.clip-corner1 {
    background-image: linear-gradient(-135deg, transparent 20px, #425df3 0);
}

.clip-corner2 {
    /* background-image: linear-gradient(-135deg, transparent 20px, #425df3 20px); */
    /* background-image: */
    background:
        linear-gradient(-135deg, transparent 20px, #425df3 0) top,
        linear-gradient(-45deg, transparent 20px, #425df3 0) bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
}

.clip-corner3 {
    /* background-image: */
    background:
        linear-gradient(135deg, transparent 20px, #425df3 0) top left,
        linear-gradient(-135deg, transparent 20px, #425df3 0) top right,
        linear-gradient(-45deg, transparent 20px, #425df3 0) bottom right,
        linear-gradient(45deg, transparent 20px, #425df3 0) bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    /* background:
        linear-gradient(-135deg, transparent 20px, #425df3 0) top right,
        linear-gradient(-45deg, transparent 20px, #425df3 0) bottom right,
        linear-gradient(45deg, transparent 20px, #425df3 0) bottom left,
        linear-gradient(135deg, transparent 20px, #425df3 0) top left;
    background-size: 50% 50%;
    background-repeat: no-repeat; */
}

.gradients1 {
    background: linear-gradient(0deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 50%),
        linear-gradient(180deg, rgba(0, 0, 255, 1), rgba(0, 0, 255, 1) 100%);
}

.gradients2 {
    background:
        /* linear-gradient(45deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 90%); */
        /* linear-gradient(225deg, rgba(67, 241, 67, 0.8), rgba(67, 241, 67, 0) 90%); */
        /* linear-gradient(135deg, rgba(255, 255, 0, 0.8), rgba(0, 0, 255, 0) 90%); */
        /* linear-gradient(-45deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 90%); */
        /* linear-gradient(45deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 90%),
        linear-gradient(225deg, rgba(67, 241, 67, 0.8), rgba(67, 241, 67, 0) 90%); */
        /* linear-gradient(45deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 90%),
        linear-gradient(225deg, rgba(67, 241, 67, 0.8), rgba(67, 241, 67, 0) 90%),
        linear-gradient(135deg, rgba(255, 255, 0, 0.8), rgba(0, 0, 255, 0) 90%); */
        /* linear-gradient(45deg, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0) 90%),
        linear-gradient(225deg, rgba(67, 241, 67, 0.8), rgba(67, 241, 67, 0) 90%), */
        /* 先写的linear-gradient层级更高，会覆盖后面的颜色 */
        linear-gradient(135deg, rgba(255, 255, 0, 0.8), rgba(0, 0, 255, 0) 90%),
        linear-gradient(-45deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 90%);
}

.repeating1 {
    background-image: repeating-linear-gradient(0deg, blue, green 50%);
}

.repeating2 {
    background-image: repeating-linear-gradient(0deg, blue, green);
    background-size: 100% 50%;
}

.repeating3 {
    background-image: repeating-linear-gradient(45deg, blue, green);
    background-size: 100% 50%;
}

.progress_outer {
    background-color: rgba(180, 160, 120, 0.2);
    width: 200px;
    height: 20px;
    border-radius: 20px;
    margin: 8px auto;
}

.progress_bg {
    width: 60%;
    height: 100%;
    /* size 决定彩条的宽度 */
    /* background-size: 26px 26px; */
    background-size: 16px 16px;
    border-radius: 20px;
    background-image: repeating-linear-gradient(-45deg, #D9CFBB 25%, #C3B393 0, #C3B393 50%, #D9CFBB 0, #D9CFBB 75%, #C3B393 0);
    /* background-image: linear-gradient(-45deg, #D9CFBB 25%, #C3B393 0, #C3B393 50%, #D9CFBB 0, #D9CFBB 75%, #C3B393 0);
    background-repeat: no-repeat;
    background-repeat: repeat-y;
    background-position: 15px 2px; */
    animation: panoramic 5s linear forwards;
    /* animation: panoramic 5s linear backwards; */
}

@keyframes panoramic {
    to {
        width: 100%;
        background-position: 100% 0;
        /* background-position: 160% 0; */
    }
}

.radial1 {
    background-image: radial-gradient(circle at center top, transparent 20px, blue);
    /* background-image: radial-gradient(circle at center top, transparent 20px, blue 21px); */
}

.radial2 {
    background-image: radial-gradient(circle at center top, blue 10px, transparent 15px);
    background-size: 20px 15px;
    background-repeat: repeat-x;
    transform: rotate(180deg);
}
</style>