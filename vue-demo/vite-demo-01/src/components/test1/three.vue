<template>
    <div class="border flex">
        <div class="border-base border-slice">three</div>
        <div class="border-base border-outset">three</div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.border-base {
    width: 81px;
    height: 81px;
    border: 27px solid;
    background-color: aquamarine;
    margin: 8px;
    border-image-source: url('../../assets/borderimage.awebp');
}

.border-slice {
    border-image-slice: 51;
    /* border-image-repeat: repeat; */
    /* border-image-repeat: round; */
    border-image-repeat: stretch;
}

.border-outset {
    border-image-slice: 51;
    border-image-repeat: round;
    border-image-outset: 27px;
    border-image-width: 10px;

}
</style>