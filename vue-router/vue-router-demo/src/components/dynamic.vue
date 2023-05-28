<template>
    <div>
        dynamic
        <RouterLink to="/user/123"></RouterLink>
        <RouterView></RouterView>
    </div>
</template>

<script lang="ts" setup>

const User = {
    // template: '<div>User</div>',
    template: '<div>{{ $route.params.id }}</div>',
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                // 对路由变化做出响应
            }
        )
    },
    async beforeRouteUpdate(to, from) {
        // 对路由变化做出响应
        this.userData = await fetchUser(to.params.id)

        this.$router.push({
            name: 'NotFound',
            // 保留当前路径并删除第一个字符，以避免目标URL以'//'开头
            params: {
                pathMatch: this.$route.path.substring(1).split('/')
            },
            // 保留现有的查询和hash值，如果有的话
            query: this.$route.query,
            hash: this.$route.hash
        })
    }
}
// const routes = [
//     { path: '/users/:id', component: User }
// ]

const routes = [
    // 将匹配所有内容并将其放在`$route.params.pathMatch`下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // 将匹配以`/user-`开头的所有内容，并将其放在`$route.params.afterUser`下
    { path: '/user-:afterUser(.*)', component: UserGeneric }
]

</script>