// 排序算法 快排 归并排序
// 汉诺塔问题 分治算法 回溯算法

// 快速排序 升序排列
function dfs(nums, start, end) {
    if (start == end) return;
    let j = partition(nums, start, end);
    dfs(nums, start, j - 1);
    dfs(nums, j + 1, end);
}
function partition(nums, start, end) {
    let pivot = nums[end];
    let less = start;
    let more = start;
    const swap = (nums, less, more) => {
        let temp = nums[less];
        nums[less] = nums[more];
        nums[more] = temp;
    }
    for (; more < end; more++) {
        if (nums[more] < pivot) {
            swap(nums, less, more);
            less++
        }
    }
    swap(nums, less, end);
    return less;
}
let arr = [1, 3, 2, 5, 4]
dfs(arr, 0, arr.length - 1)
console.log('arr', arr);







