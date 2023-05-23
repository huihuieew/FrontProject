// 递归深入学习

// 栈 线性数据结构 操作一端 栈顶 栈底 pop push peek empty
// 链表 数组 操作两端

// 数组尾/单链表头作栈顶

// 代码实现栈
class Queue {
    que
    constructor() {
        this.que = []
    }
    pop() {
        if (this.empty()) {
            throw new Error('the queue is empty.')
        }
        return this.que.splice(this.que.length - 1)
    }
    push(item) {
        this.que.push(item)
    }
    peek() {
        if (this.empty()) {
            throw new Error('the queue is empty.')
        }
        return this.que[this.que.length - 1]
    }
    empty() {
        return !this.que.length
    }
}
const que = new Queue()
que.push(1)
que.push(2)
console.log('que.pop()', que.pop());
console.log('empty', que.empty());
console.log('peek', que.peek());

// 系统栈
// 函数调用，调用栈
function mod(a, b) {
    return a % b
}
function add(a, b) {
    let res = mod(a, b)
    return res + b
}
function main() {
    let a = 3
    let b = 2
    let c = add(a, b)
}

// 函数调用本身
function main2() {
    func(2)
}
function func(a) {
    console.log('func');
    if (a <= 0) return;
    func(a - 1)
}
main2()

// 迭代
function fn(arr) {
    for (let a of arr) {
        console.log('a', a);
    }
}
const arr = [1, 2, 3, 4, 5]
fn(arr)
// 递归
function printArr(nums, start, end) {
    // 退出条件
    if (start > end) return null;
    // 完成任务
    console.log(nums[start] + '-0');
    // 递归调用
    // printArr(nums, start + 1, end)
    // 尾递归调用
    return printArr(nums, start + 1, end)
}
printArr(arr, 0, arr.length - 1)