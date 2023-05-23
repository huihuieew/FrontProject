// 递归处理 线性数据结构
// 递归适用处理 非线性结构; 迭代适合处理 线性结构 数组/链表

// 递归处理数组
const nums = [1, 2, 3, 4, 5, 6]
function sum(arr) {
    let result = 0
    for (let item of arr) {
        result += item
    }
    return result
}
console.log('sum', sum(nums));
function sumdigui(nums, start = 0, result = 0) {
    // 退出条件
    if (start >= nums.length) return result;
    // 任务执行
    result += nums[start]
    // 递归调用，子问题
    return sumdigui(nums, start + 1, result) // 子问题
}
console.log('sumdigui(nums)', sumdigui(nums));


// 求n的阶乘
function jiecheng(n, result = 1) {
    // 退出条件
    if (n == 1) return result;
    // 执行任务
    result *= n
    // 递归调用
    return jiecheng(n - 1, result) // 子问题
}
console.log('result', jiecheng(3));

// 递归处理链表 单链表
class LinkNode {
    arr
    index
    constructor() {
        this.arr = []
        this.index = 0
    }
    head() {
        return this.arr[0]
    }
    push(val) {
        this.arr.unshift(val)
        return true
    }
    pop() {
        if (this.empty()) {
            throw new Error('link is empty')
        }
        return this.arr.shift()
    }
    empty() {
        return !this.arr.length
    }
    // 删除单链表的某个节点
    delete() {

    }
    length() {
        return this.arr.length
    }
    next() {
        if (this.index < this.arr.length - 1) {
            this.index++
            return this.arr[this.index]
        }
        return;
    }
    // 反转单链表 递归
    reverse() {

    }
}






