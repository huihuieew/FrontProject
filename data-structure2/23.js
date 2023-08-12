// 线性数据结构， 栈，基于数组实现

function stack() {
    return {
        items: [],
        push(ele) {
            this.items.push(ele);
        },
        pop() {
            return this.items.pop();
        },
        peek() {
            return this.items[this.items.length - 1]
        },
        isEmpty() {
            return !this.items.length;
        },
        size() {
            return this.items.length;
        },
        toString() {
            return this.items.join(',')
        }
    }
}

// 2.基于栈实现的算法 十进制转二进制
function d2b(val) {
    let s = stack();
    while (val > 0) {
        s.push(val % 2);
        val = Math.floor(val / 2);
    }
    let res = ''
    while (!s.isEmpty()) {
        res += s.pop();
    }
    return res;
}
console.log('d2b(5)', d2b(15));

// 3.基于二叉树数据结构实现的排序算法 快排/归并排序 汉诺塔问题 组织人员树结构问题 遍历

