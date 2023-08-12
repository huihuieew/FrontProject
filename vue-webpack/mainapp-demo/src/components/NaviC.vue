<template>
    <div id="nav">
        <a href="/" :class="{ active: !moduleName || moduleName === 'HOME' }">公共首页</a>
        <!-- <a href="/projectA.html" :class="{ active: moduleName === 'A' }">projectA</a> -->
        <a href="/projectA" :class="{ active: moduleName === 'A' }">projectA</a>
        <!-- <a href="/projectB" :class="{ active: moduleName === 'B' }">projectB</a>
        <a href="/projectC" :class="{ active: moduleName === 'C' }">projectC</a>
        <a href="/projectD" :class="{ active: moduleName === 'D' }">projectD</a> -->
    </div>
</template>

<script>
export default {
    props: {
        moduleName: String,
    },
    data() {
        return {

        }
    },
    mounted() {

    }
}
</script>
<style>
#nav {
    padding: 30px;

}

a {
    font-weight: bold;
    color: #2c3e50;
    margin: 8px;
}

a.router-link-exact-active {
    color: #42b983;
}

a.active {
    color: #00f;
    text-decoration: none;
}

a:hover {
    color: red;
    text-decoration: underline;
}
</style>