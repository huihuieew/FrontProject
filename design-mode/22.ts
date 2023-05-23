// 闭包 高阶函数


// 变量的作用域
const aaa = 1
let fn11 = function () {
    let b = 2
    let fn2 = function () {
        let c = 3
        alert(b)
        alert(a)
        alert(c)
    }
    fn2()
}
// 变量的生命周期
// f返回了一个匿名函数的引用，可以访问func被调用时产生的环境，而局部变量a一直处在这个环境里。
// 变量a所在的环境还能被外界访问，这个局部变量有了不被销毁的理由。
// 产生了闭包结构，局部变量生命周期被延续了。

// 闭包 封装变量
let mult = function () {
    let a = 1
    for (let i = 0; i < arguments.length; i++) {
        a = a * arguments[i]
    }
    return a
}
let cache = {}
let mult1 = function () {
    let args = Array.prototype.join.call(arguments, ',')
    if (cache[args]) return cache[args];
    let a = 1
    for (let i = 0; i < arguments.length; i++) {
        a *= arguments[i]
    }
    return cache[args] = a
}
alert(mult(1, 2, 3))

let mult2 = (function () {
    let cache = {}
    let calculate = function () {
        let a = 1
        for (let i = 0; i < arguments.length; i++) {
            a *= arguments[i]
        }
        return a
    }
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (args in cache) return cache[args];
        return cache[args] = calculate.apply(null, arguments)
    }
})()

// 对象以方法的形式包含了过程
// 闭包在过程中以环境的形式包含了数据
// 闭包 面向对象设计
let extent = function () { // 闭包
    let value = 0
    return {
        call() {
            value++;
            console.log('value', value);
        }
    }
}
let ext = extent()
ext.call()
ext.call()
ext.call()
// 面向对象
let extend4t = {
    value: 0,
    call() {
        this.value++;
        console.log(this.value);
    }
}
extend4t.call()
extend4t.call()
extend4t.call()

// 闭包 实现命令模式
// 分离请求发起者和接收者的耦合
let tv = {
    open() {
        console.log('打开电视机');
    },
    close() {
        console.log('关闭电视机');
    }
}
let openCommand = (receiver) => {
    this.receiver = receiver
}
openCommand.prototype.execute = () => {
    this.receiver.open() // 执行命令
}
openCommand.prototype.undo = () => {
    this.receiver.close() // 关闭电视机
}
let setCommand1 = function (command) {
    (document.getElementById('execute') as HTMLElement).onclick = function () {
        command.execute()
    };
    (document.getElementById('undo') as HTMLElement).onclick = function () {
        command.undo()
    }
}

// 闭包版本命令模式   面向对象版本命令模式
let tv1 = { // 接收命令
    open() {
        console.log('打开电视机');
    },
    close() {
        console.log('关闭电视机');
    }
}
let createCommand = function (receiver) { // 分离set和tv间的耦合
    let execute = () => {
        return receiver.open()
    }
    let undo = () => {
        return receiver.close()
    }
    return {
        execute, undo
    }
}
let setCommand2 = function (command) { // 发起命令
    (document.getElementById('execute') as HTMLElement).onclick = function () {
        command.execute()
    };
    (document.getElementById('undo') as HTMLElement).onclick = function () {
        command.undo()
    }
}
setCommand2(createCommand(tv1))

// 闭包与内存泄漏
// 将变量放在闭包中，与放在全局作用域中，对内存的影响是一致的
// 闭包造成内存泄漏，是循环引用造成的，闭包作用域链中保存这dom节点






































