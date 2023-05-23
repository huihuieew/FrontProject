// 归并排序 后序遍历
function dfs(start, end) {
    // 退出条件 最小子问题
    if (start >= end) return;
    // 子问题 执行子任务 递归调用
    let mid = Math.floor((start + end) / 2)
    console.log('mid', mid);
    // 两次调用 二叉树
    dfs(start, mid)
    dfs(mid + 1, end)
    // 根任务
    merge(start, mid, end)
}
function merge(start, mid, end) {
    let temp = []
    let i = start;
    let j = mid + 1
    let pos = 0
    // 将数组依次存入数组中
    while (i <= mid && j <= end) {
        if (data[i] < data[j]) {
            temp[pos] = data[i]
            i++
            pos++
        } else {
            temp[pos] = data[j]
            j++
            pos++
        }
    }
    while (i <= mid) {
        temp[pos] = data[i]
        i++
        pos++
    }
    while (j <= end) {
        temp[pos] = data[j]
        j++
        pos++
    }
    for (let k = 0; k < temp.length; k++) {
        data[start] = temp[k]
        start++
    }
}
function sort(arr) {
    dfs(0, arr.length - 1)
    return arr
}
const data = [3, 4, 2, 6, 55, 7]
console.log('data', sort(data));
console.log('data', data);
