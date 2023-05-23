// 最小知识原则 LKP
// 类/模块/函数/变量

// 减少对象的联系


// 最小知识原则的设计模式
// 中介者模式  外观模式

// 外观模式 关键-高层接口封装子接口 外观和子系统修改互不影响
const a1 = () => { }
const a2 = () => { }
const b1 = () => { }
const b2 = () => { }
const A = function () {
    a1();
    a2()
}
const B = function () {
    b1()
    b2()
}
const facade = function () {
    A()
    B()
}
facade()

// 具有缓存效果的计算乘积的函数
const mult = (function () {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) {
            return cache[args]
        }
        let a = 1
        for (let i = 0; i < arguments.length; i++) {
            a = a * arguments[i]
        }
        return cache[args] = a
    }
})()

mult(1, 2, 3)


























