// 接口 面向接口编程

// 面向对象程序设计

// 1.show
function show(obj) {
    const isFunction = obj => obj && typeof obj.show === 'function'
    console.log('isFunction', isFunction);
    isFunction(obj) && obj.show()
}
function show2(obj) {
    try {
        obj.show()
    } catch (e) {
        console.log('e', e);
    }
}
let myobj = {}
show(myobj)

// 2.鸭子类型 isArray
let arr = []
console.log('Object.prototype.toString.call(arr)', Object.prototype.toString.call(arr) === '[object Array]');
let toString = Object.prototype.toString
console.log('toString.call(arr)', toString.call(arr));




// 3.闭包，高阶函数