// 回溯算法  回溯思想实现 dfs 递归

// 二叉树路径
let path = []
let result = []
function dfs(node) {
    if (node == null) return;
    path.push(node.value);
    if (node.left == null && node.right == null) {
        result.push([...path])
    }
    dfs(nodes[node.left]);
    dfs(nodes[node.right]);
    path.pop();
}
const nodes = [
    { value: 1, left: 1, right: 4 },
    { value: 2, left: 2, right: 3 },
    { value: 3 },
    { value: 4 },
    { value: 5, left: 5 },
    { value: 6 },
]
dfs(nodes[0]);
console.log('result', result);

// 全排列 抽象能力非常重要
// [1,2,3]  树形结构 三个三叉树，合成一个三叉树
// 剪枝
let path2 = []
let result2 = []
function dfs2(arr, index = -1) {
    if (path2.length === arr.length) return;
    if (index != -1) {
        path2.push(arr[index])
    }
    if (path2.length === arr.length) {
        result2.push([...path2]);
    }
    for (let i = index + 1; i < arr.length; i++) {
        dfs2(arr, i)
    }
    if (index != -1) {
        path2.pop()
    }
}
dfs2([1, 2, 3], -1);
console.log('result2', result2);
dfs2([1, 4, 3, 2], -1);
console.log('result2', result2);

// 动态规划dp  斐波拉契数


