// 开放-封闭原则 OCP

// window.onload 函数 扩展
// window.onload = function () {
//     // do something
//     console.log(document.getElementsByTagName('*').length)
// }

// Function.prototype.after = function (afterFn) {
//     let _self = this
//     return function () {
//         let ret = _self.apply(this, arguments)
//         afterFn.apply(this, arguments)
//         return ret
//     }
// }
// window.onload = (window.onload || function () { }).after(function () {
//     console.log(document.getElementsByTagName('*'));
// })

// 对象多态性消除条件分支
let makeSound = function (animal) {
    if (animal instanceof Duck) {
        console.log('gagaga');
    } else if (animal instanceof Chicken) {
        console.log('gegege');
    }
    else if (animal instanceof Dog) {
        console.log('wangwangwang');
    }
}
let Duck = function () { }
let Chicken = function () { }
makeSound(new Duck())
makeSound(new Chicken())
let Dog = function () { }
makeSound(new Dog())
let dog = new Dog()
dog.prorotype = Dog.prototype
console.log(dog.prorotype === Dog.prototype);
console.log(dog.__proto__ === Dog.prototype);
console.log('dog.prorotype', dog.prorotype);
console.log('Dog.prototype', Dog.prototype);

// 多态思想 animal duck chicken dog sound()
let makeASound = (animal) => {
    animal.sound()
}
let Duck1 = function () { }
Duck1.prototype.sound = function () {
    console.log('gagaga');
}
let Chicken1 = function () { }
Chicken1.prototype.sound = function () {
    console.log('gegege');
}
makeASound(new Duck1())
makeASound(new Chicken1())

let Dog1 = function () { }
Dog1.prototype.sound = function () {
    console.log('wangwangwang');
}
makeASound(new Dog())

// 找出变化的地方
// 放置挂钩hook  回调函数callback

let arrMap = function (arr: Array<any>, callback: Function) {
    let ret = [];
    for (let item of arr) {
        let value = callback(item) as never
        ret.push(value)
    }
    return ret
}
let a = arrMap([1, 2, 3], (item) => item * 2)
let b = arrMap([1, 2, 3], (item) => item * 3)

// 设计模式中的 开放-封闭思想
// 发布-订阅者模式
// 模板方法模式 -- 基于继承思想
// 策略模式 -- 策略类
// 代理模式    Proxy
// 职责链模式  app.use(router).use(pinia).mount()

// 接受第一次愚弄 - 先简单完成，再迭代优化























