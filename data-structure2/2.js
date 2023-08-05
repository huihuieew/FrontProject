// 递归 适用非线性数据结构  二叉树 多叉树 图
// 树形结构 公司组织人员树 多叉树
// 迭代 使用线性数据结构    链表 数组

// 1.求n的阶乘     递归 
function jiecheng(n, result = 1) {
    if (n == 1) return result;
    result *= n;
    return jiecheng(n - 1, result)
}
console.log('result', jiecheng(3));

// 2.链表 单链表
let link = function () {
    return {
        arr: [],
        index: 0,
        head() {
            return this.arr[0]
        },
        push(val) {
            this.arr.unshift(val)
            return true;
        },
        pop() {
            return this.arr.shift()
        },
        empty() {
            return !this.arr.length;
        },
        length() {
            return this.arr.length;
        },
        next() {
            if (this.index < this.arr.length - 1) {
                this.index++;
                return this.arr[this.index]
            }
        },
        // 删除某个节点
        delete(pos) {
            if (pos == 0) return this.arr.shift();
            while (this.index !== pos) {
                this.next();
            }
            return this.arr.splice(this.index, 1)
        }
    }
}
let lk = link()
lk.push(1)
lk.push(2)
lk.push(3)
lk.push(4)
console.log('lk.delete(2)', lk.delete(2));
console.log('lk.pop()', lk.pop());
console.log('lk.pop()', lk.pop());
console.log('lk.pop()', lk.pop());



