<template>
    <div class="about">
        <NaviC />
        <div>
            <router-link to="/">home</router-link>
            <router-link to="/about">about</router-link>
        </div>
        <h1>这是一个多系统的VUE项目</h1>
    </div>
</template>

<script>
import NaviC from '@/components/NaviC.vue'

export default {
    components: {
        NaviC
    }
}

</script>