// 栈 队列 优先队列 单向链表 双向链表 集合set 字典map

// 队列   基于数组/链表实现

// 基于数组
class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
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
// 击鼓传花
function jgch(arr, num) {
    if (!arr.length) return null;
    let que = new Queue()
    for (let item of arr) {
        que.enqueue(item)
    }
    while (que.size() !== 1) {
        for (let j = 0; j < num - 1; j++) {
            que.enqueue(que.dequeue())
        }
        que.dequeue()
    }
    // arr.findIndex(item => item === que.front())
    return que.front()
}

// 优先队列  队头front 队尾rear 
class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.items = []
    }
    enqueue(element, priority) {
        let node = new QueueElement(element, priority)
        if (this.isEmpty()) {
            this.items.push(node)
        } else {
            let index = 0
            let added = false
            for (let item of this.items) {
                if (node.priority < item.priority) {
                    this.items.splice(index, 0, node)
                    added = true
                }
                index++
            }
            if (!added) {
                this.items.push(node)
            }
        }
    }
    isEmpty() {
        return this.items.length === 0
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }
    size() {
        return this.items.length
    }
    toString() {
        let str = ''
        for (let item of this.items) {
            str += item.element + ' ' + item.priority + ', '
        }
        return str;
    }
}
let pq = new PriorityQueue()
pq.enqueue('Tom', 111)
pq.enqueue('Hellen', 200)
pq.enqueue('Mary', 30)
pq.enqueue('Gogo', 27)
console.log('pq', pq.toString());



























