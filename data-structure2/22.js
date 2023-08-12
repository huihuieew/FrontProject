// 线性结构， 链表，双向链表

function doublyLinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        size() {
            return this.length;
        },
        clear() {
            this.head = null
            this.tail = null
            this.length = 0
        },
        isEmpty() {
            return this.length == 0
        },
        append(ele) {
            let node = {
                value: ele,
                prev: null,
                next: null
            }
            if (this.head == null) {
                this.head = node;
                this.tail = node;
            } else {
                let last = this.tail;
                this.tail = node;
                last.next = node;
                node.prev = last;
            }
            this.length++;
        },
        delete(pos) {
            if (pos < 0 || pos > this.length - 1) return false;
            if (this.head == null) return false;
            let res;
            if (this.length == 1) {
                res = this.head;
                this.clear();
                return res;
            };
            if (pos == 0) {
                res = this.head;
                this.head = this.head.next;
                this.head.prev = null;
            } else if (pos == this.length - 1) {
                res = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                let current = this.head;
                let previous = null;
                let index = 0;
                while (index < pos) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
                current.next.prev = previous;
                res = current;
            }
            this.length--;
            return res;
        },
        indexOf(ele) {
            let current = this.head;
            let index = 0;
            while (current) {
                if (current.value == ele) {
                    return index;
                }
                current = current.next;
                index++;
            }
            return -1;
        },
        search(ele) {
            let current = this.head;
            while (current) {
                if (current.value == ele) {
                    return current;
                } else {
                    current = current.next;
                }
            }
            return false;
        }
    }
}

