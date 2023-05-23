// 回溯算法  回溯思想实现 深度优先搜索算法dfs 递归

// 二叉树路径问题
let path = []
let result = []
function dfs(node) {
    if (node == null) return;
    path.push(node.value)
    if (node.left == null && node.right == null) {
        result.push([...path])
    }
    dfs(nodes[node.left])
    dfs(nodes[node.right])
    path.pop()
}
const nodes = [
    { value: 1, left: 1, right: 4 },
    { value: 2, left: 2, right: 3 },
    { value: 3 },
    { value: 4 },
    { value: 5, left: 5 },
    { value: 6 },
]
dfs(nodes[0])
console.log('result', result);



















