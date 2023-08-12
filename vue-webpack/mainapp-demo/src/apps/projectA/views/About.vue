<template>
    <div class="about">
        <NaviC moduleName="A" />
        <div>
            <router-link to="/">home</router-link> |
            <router-link to="/about">about</router-link>
        </div>
        <h3>项目A嘛，用来测试而已，什么也没有也没关系的</h3>
    </div>
</template>

<script>
import NaviC from '@/components/NaviC.vue';

export default {
    name: 'About',
    components: {
        NaviC
    }
}
</script>