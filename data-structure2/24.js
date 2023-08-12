// 线性数据结构， 队列，基于数组实现

function queue() {
    return {
        items: [],
        enqueue(ele) {
            this.items.push(ele);
        },
        dequeue() {
            return this.items.shift();
        },
        front() {
            return this.items[0];
        },
        isEmpty() {
            return !!this.items.length;
        },
        size() {
            return this.items.length;
        },
        toString() {
            return this.items.join(',')
        }
    }
}

// 2.基于队列实现的算法 击鼓传花
function jgch(arr, num) {
    if (!arr.length) return;
    let que = queue();
    for (let item of arr) {
        que.enqueue(item);
    }
    let res = null;
    while (que.size() !== 1) {
        for (let j = 0; j < num - 1; j++) {
            que.enqueue(que.dequeue())
        }
        res = que.dequeue()
    }
    res = que.dequeue();
    return res;
}


// 3.优先队列
function priorityQueue() {
    return {
        items: [],
        enqueue(ele, priority) {
            let node = {
                value: ele,
                priority
            }
            if (this.isEmpty) {
                this.items.push(node);
            } else {
                let index = 0;
                let added = false;
                for (let item of this.items) {
                    if (node.priority < item.priority) {
                        this.items.splice(index, 0, node);
                        added = true;
                    }
                    index++;
                }
                if (added) return;
                this.items.push(node);
            }
        },
        dequeue() {
            return this.items.shift();
        },
        front() {
            return this.items[0];
        },
        isEmpty() {
            return this.items.length === 0;
        },
        size() {
            return this.items.length;
        },
        toString() {
            let str = ''
            this.items.map(item => {
                str += item.value;
            })
            return str;
        }
    }
}


















