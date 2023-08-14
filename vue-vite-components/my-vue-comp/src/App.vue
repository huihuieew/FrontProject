<script setup lang="ts">
import ComponentList from '../packages/list.json';
import { reactive } from 'vue';

const data = reactive({
  links: ComponentList.map((item: any) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})



</script>

<template>
  <div class="my-kit-doc">
    <aside>
      <router-link v-for="(link) in data.links" :to="link.path">{{ link.name }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
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
