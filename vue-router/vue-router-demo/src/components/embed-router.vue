<template>
    <div>
        embed-router
        <RouterLink to="/user/123"></RouterLink>
        <RouterView></RouterView>
        
    </div>
</template>

<script lang="ts" setup>

// const User = {
//     template: '<div>{{ $route.params.id }}</div>',
// }
// // 这些都会传递给 `createRouter`
// const routes = [
//     { path: '/user/:id', component: User }
// ]

const User = {
    template: `<div class="user">
            <h2>User {{ $route.params.id }}</h2>
            <router-view></router-view>
        </div>`,
}
const routes = [
    {
        path: '/user/:id',
        component: User,
        children: [
            {
                // /user/:id/profile 匹配成功
                path: 'profile',
                component: UserProfile,
            },
            {
                // /user/:id/posts 匹配成功
                path: 'posts',
                component: UserPosts,
            }
        ]
    }
]

</script>