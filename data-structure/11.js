// 全排列   抽象能力很重要
// [1，2，3]
// 树形结构 3个三叉树 合成一个三叉树 
// 剪枝

let path = []
const result = []
function dfs(arr, index = -1) {
    if (path.length == arr.length) return;
    if (index != -1) {
        path.push(arr[index])
    }
    if (path.length == arr.length) {
        result.push([...path])
    }
    for (let i = index + 1; i < arr.length; i++) {
        dfs(arr, i)
    }
    if (index != -1) {
        path.pop()
    }
}
dfs([1, 2, 3], -1)
console.log('result', result);
