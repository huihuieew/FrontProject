<template>
    <div class="home">
        <NaviC moduleName="A" />
        <div>
            <router-link to="/">home</router-link> |
            <router-link to="/about">about</router-link>
        </div>
    </div>
    <h1>项目A首页</h1>
</template>

<script>
import NaviC from '@/components/NaviC.vue';

export default {
    name: 'Home',
    components: {
        NaviC
    }
}
</script>