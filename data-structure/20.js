// 线性结构

// 链表
// 单向链表


// 单向链表
class LinkedList {
    head = null
    length = 0
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SingleLinkLit {
    constructor() {
        this.length = 0
        this.head = null
    }
    append(element) {
        let node = new Node(element)
        let current;
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }
    delete(position) {
        if (position < this.length && postion > -1) {
            let current = this.head
            let previous;
            let index = 0;
            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.length--
            return current.element
        } else {
            return null;
        }
    }
    insert(position, element) {
        if (position < this.length && positioin > -1) {
            let node = new Node(element)
            let current = this.head
            let previous = null;
            if (positioin === 0) {
                this.head = node
                node.next = current
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            this.length++
            return true
        } else {
            return false
        }
    }
    indexOf(element) {
        let current = this.head
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
    toString() {
        let current = this.head
        let str = ''
        while (current) {
            str += current.element + (current.next ? '\n' : '')
            current = current.next
        }
        return str
    }
}
class Node {
    constructor(element) {
        this.element = element // 信息域
        this.next = null  // 指针
    }
}