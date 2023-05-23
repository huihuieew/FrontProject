// 栈 队列 优先队列 单向链表 双向链表 集合set 字典map

// 栈 基于数组的实现
class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    toString() {
        return this.items.join(' ')
    }
}
// 十进制转二进制
function d2b(val) {
    // 定义一个栈，保存余数
    let s = new Stack()
    // 进行循环的除法
    while (val > 0) {
        s.push(val % 2)
        val = Math.floor(val / 2)
    }
    let res = ''
    while (!s.isEmpty()) {
        res += s.pop()
    }
    return res
}




