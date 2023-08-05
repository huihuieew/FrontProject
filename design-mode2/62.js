// this call apply bind
// this指向问题

// 闭包 高阶函数

// 1.变量作用域
const a = 1
let fn1 = function () {
    let b = 2
    let fn2 = function () {
        let c = 3
        console.log('a', a);
        console.log('b', b);
        console.log('c', c);
    }
    fn2()
}
fn1()

// 2.闭包 封装变量
let mult = (function () {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) return cache[args];
        let a = 1;
        for (let i = 0; i < arguments.length; i++) {
            a *= arguments[i]
        }
        console.log('a', a);
        return cache[args] = a;
    }
})()
console.log('mult', mult(1, 2, 3));
console.log('mult', mult(1, 2, 3));

// 3.闭包 
// 闭包在过程中以环境的形式包含了变量
let extent1 = function () {
    let value = 0;
    return {
        call() {
            value++;
            console.log('value', value);
        }
    }
}
let ext = extent1()
ext.call()
ext.call()
// 3.面向对象设计
// 对象以方法的形式包含了过程
let extent2 = {
    value: 5,
    call() {
        this.value++;
        console.log('value2', this.value);
    }
}
extent2.call()
extent2.call()

// 4.闭包版命令模式
let tv = {  // 执行者
    open() {
        console.log('打开电视机');
    },
    close() {
        console.log('关闭电视机');
    },
}
let command = {
    do() {
        tv.open()
    },
    undo() {
        tv.close()
    }
}
let setCommand = function () {
    document.getElementById('do').onclick = function () { // 请求发起者
        command.do()
    }
    document.getElementById('undo').onclick = function () {
        command.undo()
    }
}
// 闭包与内存泄漏
// 闭包造成内存泄漏，是循环引用造成的，闭包作用域中保存着dom节点