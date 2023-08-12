<template>
    <div>
        <NaviC />
        <div>
            <router-link to="/">home</router-link>
            <router-link to="/about">about</router-link>
        </div>
        <div class="home">
            <img src="../assets/logo.png" alt="">
            <HelloWorld msg="welcome to Your Vue.js APP" />
        </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import NaviC from '@/components/NaviC.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld, NaviC
    }
}

</script>