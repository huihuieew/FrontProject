<script lang="ts" setup>

const routes = [
    { path: '/o/:orderId' },
    { path: '/p/:productName' },
]

const routes1 = [
    // /:orderId 仅匹配数字
    { path: '/:orderId(\\d+)' },
    // /:productName 匹配其它任何内容
    { path: '/:productName' }
]


</script>