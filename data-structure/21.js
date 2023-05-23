// 链表
// 双向链表

class Node {
    constructor(element) {
        this.next = null
        this.prev = null
        this.element = element
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    size() {
        return this.length
    }
    clear() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    isEmpty() {
        return this.length == 0
    }
    insert(position, element) {
        if (position > this.length && position < 0) return false
        let node = new Node(element)
        let current = this.head
        let previous = null
        let index = 0
        if (position === 0) {
            this.head = node
            node.next = current
            current.prev = node
        } else if (position === this.length) {
            current = this.tail
            this.tail = node
            current.next = node
            node.prev = current
        } else {
            while (index++ < postion) {
                previous = current
                current = current.next
            }
            previous.next = node
            node.prev = previous
            node.next = current
            current.prev = node
        }
        this.length++
        return true
    }
    delete(position) {
        if (position > this.length - 1 && position < 0) return false
        let current = this.head
        let previous;
        let index = 0
        if (position === 0) {
            this.head = current.next
            current.next.prev = null
        } else if (position === this.length - 1) {
            current = this.tail
            this.tail = current.prev
            current.prev.next = null
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            current.next.prev = previous
        }
        this.length--
        return true
    }
    indexOf(element) {
        let current = this.head // 拿节点
        let index = 0     // 拿指针
        while (current) {
            if (current.element === element) {
                return index
            } else {
                index++
                current = current.next
            }
        }
        return -1
    }
    search(element) {
        let current = this.head // 拿节点
        while (current) {
            if (current.element === element) {
                return true
            } else {
                current = current.next
            }
        }
        return false
    }
    // 实现两链表的合并 升序链表
}