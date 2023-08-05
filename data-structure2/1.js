// 栈 线性数据结构  栈顶 栈底 pop push peek empty 操作一端
// 链表 数组 操作两端

// 数组尾/链表头作栈顶
function queue() {
    return {
        que: [],
        pop() {
            // if (this.empty()) throw new Error('the queue is empty.');
            return this.que.pop()
        },
        push(item) {
            this.que.push(item);
        },
        peek() {
            return this.que[this.que.length - 1]
        },
        empty() {
            return !this.que.length;
        }
    }
}
let que = queue();
que.push(1)
que.push(2)
que.push(3)

// 2.系统栈 函数调用，调用栈 递归
function mod(a, b) {
    return a % b;
}
function add(a, b) {
    return mod(a, b) + b;
}
function main() {
    let a = 3;
    let b = 2;
    let c = add(a, b)
    return c;
}
// 函数调用本身
function fn(a) {
    console.log('fn');
    if (a <= 0) return 0;
    fn(a - 1);
}
function main2() {
    console.log('fn', fn(2));
}
main2()

// 迭代
function fn2(arr) {
    for (let a of arr) {
        console.log('a', a);
    }
}
const arr = [1, 2, 3, 4, 5]
fn2(arr);
// 递归
function printArr(nums, start, end) {
    if (start > end) return null;
    console.log(nums[start] + '-0');
    return printArr(nums, start + 1, end)
}
printArr(arr, 0, arr.length - 1)