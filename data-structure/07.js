// 递归的实际应用
// 线性数据结构，采用迭代的方式解决
// 非线性结构，二叉树/多叉树/图结构，采用递归方式解决

// 排序算法 快排 归并排序
// 汉诺塔问题
// 分治算法
// 回溯算法

// 快速排序  升序排列
function dfs(nums, start, end) {
    // 退出条件 最小子问题
    if (start == end) return;
    // 分区 执行任务 根任务
    let j = partition(nums, start, end)
    // 子问题 递归调用 子任务
    dfs(nums, start, j - 1);
    dfs(nums, j + 1, end)
}
function partition(nums, start, end) {
    let pivot = nums[end]
    let less = start
    let more = start
    for (; more <= end - 1; more++) {
        if (nums[more] < pivot) {
            swap(nums, less, more)
            less++
        }
    }
    swap(nums, less, end)
    return less
}
function swap(nums, less, more) {
    let temp = nums[less]
    nums[less] = nums[more]
    nums[more] = temp
}
const arr = [3, 23, 3, 4, 5]
console.log('dfs(arr)', dfs(arr, 0, arr.length - 1));