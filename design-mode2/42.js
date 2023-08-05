// 开放-封闭原则

// 找出变化的地方，放置hook callback
// 1.arrMap
let arrMap = function (arr, callback) {
    let ret = []
    for (let item of arr) {
        ret.push(callback(item))
    }
    return ret
}
let a = arrMap([1, 2, 3], item => item * 2)
let b = arrMap([1, 2, 3], item => item * 3)
console.log('a', a);
console.log('b', b);

// 接受第一次的愚弄 - 先简单完成，再迭代优化

// 对象多态性，消除条件分支
// 多态思想 animal duck chicken dog sound()