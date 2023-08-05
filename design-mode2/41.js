// 最小知识原则的设计模式
// 中介者模式 外观模式

// 外观模式
// 高层接口封装子接口，子接口修改/外观修改互不影响
let a1 = () => {
    console.log('a1');
}
let a2 = () => {
    console.log('a2');
}
let b1 = () => {
    console.log('b1');
}
let b2 = () => {
    console.log('b2');
}
let A = function () { // 子接口A
    a1()
    a2()
}
let B = function () { // 子接口B
    b1()
    b2()
}
let facade = function () { // 外观接口
    A()
    B()
}
facade()

// 2.具有缓存效果的计算乘积的函数
const mult = (function () {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) {
            return cache[args]
        }
        let a = 1
        for (let i = 0; i < arguments.length; i++) {
            a *= arguments[i]
        }
        return cache[args] = a
    }
})()
mult(1, 2, 3)