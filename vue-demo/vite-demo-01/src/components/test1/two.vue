<template>
    <div style="display: flex;flex-wrap:wrap">
        <!-- 被裁减的矩形区域，上右下左距离边界的距离 -->
        <!-- inset(<shape-arg>{1，4} [round <border-radius>]?) -->
        <div class="basic_path inset"></div>
        <!-- 定义一个圆 -->
        <!-- circle([<radius>]? [at <position>]?) -->
        <div class="basic_path circle"></div>
        <!-- 定义一个椭圆 -->
        <!-- ellipse( [<x,y>] [at <x,y>] ) -->
        <div class="basic_path ellipse"></div>
        <!-- 定义一个多边形 -->
        <!-- polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# ) -->
        <div class="basic_path polygon"></div>
        <div class="basic_path polygon2"></div>
        <div class="basic_path clip_source"></div>
        <!-- <div class="geometry_box"></div> -->
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.basic_path {
    width: 200px;
    height: 200px;
    /* border: 1px solid red; */
    background-color: aquamarine;
    margin: auto;
}

.inset {
    /* clip-path: inset(0); */
    clip-path: inset(10px 20px 10% 20% round 20px);
    transition: clip-path 0.5s ease-in-out;
}

.inset:hover {
    clip-path: inset(15px 30px 15% 30% round 30px);
}

.circle {
    clip-path: circle(100px at center);
    transition: clip-path 0.5s ease-in-out;
}

.circle:hover {
    clip-path: circle(50px at center);
}

.ellipse {
    clip-path: ellipse(100px 80px at 50% 50%);
    transition: clip-path 0.5s ease-in-out;
}

.ellipse:hover {
    clip-path: ellipse(80px 60px at 50% 50%);
}

.polygon {
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
    transition: clip-path 0.5s ease-in-out, transform 0.5s linear;
}

.polygon:hover {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    transform: rotate(45deg);
}

.polygon2 {
    /* clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 25% 25%, 25% 75%, 75% 75%, 75% 25%); */
    clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
}

.clip_source {
    clip-path: url();
}
</style>