// 线性结构， 链表，单向链表

function singleLinkedList() {
    return {
        head: null,
        length: 0,
        append(el) {
            let node = {
                value: el, // 信息域
                next: null // 指针
            }
            let current;
            if (this.head == null) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.length++;
        },
        delete(pos) {
            if (pos < 0 || pos > this.length - 1) return false;
            if (this.head == null) return false;
            let res;
            if (pos == 0) {
                res = this.head
                this.head = this.head.next;
            } else {
                let current = this.head;
                let previous = null;
                let index = 0;
                while (index < pos) {
                    previous = current
                    current = current.next
                    index++;
                }
                previous.next = current.next;
                res = this.current
            }
            this.length--;
            return res;
        },
        insert(pos, ele) {
            if (pos < 0 || pos > this.length) return false;
            let node = {
                value: ele,
                next: null
            }
            if (this.head == null) return this.head = node;
            let current = this.head
            if (pos == 0) {
                this.head = node;
                node.next = current;
            } else if (pos == this.length) {
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            } else {
                let previous = null;
                let index = 0
                while (index < pos) {
                    previous = current
                    current = current.next
                    index++
                }
                previous.next = node;
                node.next = current;
            }
            this.length++;
            return true;
        },
        indexOf(ele) {
            let current = this.head;
            let index = 0
            while (current) {
                if (current.value == ele) {
                    return index;
                }
                current = current.next;
                index++;
            }
            return -1;
        }
    }
}