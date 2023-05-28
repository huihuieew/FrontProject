<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = {
  template: '<div>Home</div>'
}
const About = {
  template: '<div>About</div>'
}

const routes = [
  { path: '/', component: Home },
  { path: '/', component: About },
]
const router1 = useRouter()
const route = useRoute()

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({})
app.use(router)
app.mount('#app')

</script>

<template>
  <div>
    hello
    <router-link to="/">go to home</router-link>
    <router-link to="/about">go to about</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
