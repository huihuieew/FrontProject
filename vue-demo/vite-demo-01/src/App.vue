<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import test from './components/test.vue';
// import transitionTest from './components/transition-test.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <test /> -->
  <!-- <transitionTest /> -->
  <!-- <button>router1</button> -->
  <router-link to="/">home</router-link>
  <router-link to="/test1">test1</router-link>
  <router-link to="/test2">test2</router-link>
  <hr>
  <router-view></router-view>
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

a {
  padding: 8px;
}
</style>
