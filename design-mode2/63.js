// 高阶函数
// fn作为参数或返回值传递

// fn作为参数传递
// 1.获取用户信息
let getUserInfo = function (userid, callback) {
    $.ajax('http://www.baidu.com/getuserinfo?' + userid, function (data) {
        if (typeof callback !== 'function') return;
        callback(data)
    })
}
// 2.添加dom
let appendDiv = function (callback) {
    for (let i = 0; i < 5; i++) {
        let div = document.createElement('div');
        div.innerHTML = String(i)
        if (typeof callback === 'function') callback(div);
        document.body.appendChild(div);
    }
};
// appendDiv(node => node.style.display = 'none');

// 3.数组排序
([1, 4, 3]).sort((a, b) => a - b) // 升序

// fn作为返回值传递
// 1.类型判断
let isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
}
let isArray = isType('Array')
let isString = isType('String')
let isNumber = isType('Number')

// 2.单例模式
let getSingle = function (fn) {
    let ret;
    return function () {
        // if (ret) return ret;
        // ret = fn.apply(this, arguments)
        // return ret;
        return ret || (ret = fn.apply(this, arguments))
    }
}
let createScript = function (number) {
    // return document.createElement('script');
    console.log('create script');
    return number;
}
let singleScript = getSingle(createScript)
console.log('singleScript(1)', singleScript(1));
console.log('singleScript(2)', singleScript(2));

// 3.实现AOP 面向切面编程
// 把一个函数动态接入到另外一个函数中
let aop_before = function (beforefn) {
    let _self = this
    return function () {
        beforefn.apply(this, arguments)
        return _self.apply(this, arguments)
    }
}
let aop_after = function (afterfn) {
    let _self = this
    return function () {
        let ret = _self.apply(this, arguments)
        afterfn.apply(this, arguments)
        return ret;
    }
}
let fn = function () {
    console.log('2');
}
fn = aop_before.call(fn, function () {
    console.log('1');
})
fn = aop_after.call(fn, function () {
    console.log('3');
})
fn()

// 4.函数柯里化
let cost = (function () {
    let args = []
    return function () {
        if (arguments.length === 0) {
            let money = 0
            for (let item of args) {
                money += Number(item)
            }
            return money;
        } else {
            args.push(...arguments)
        }
    }
})()
cost(1, 2, 3, 4, 5)
console.log('cost', cost());
// 4.1通用currying化
let currying = function (fn) {
    let args = []
    return function a() {
        if (arguments.length === 0) {
            return fn.apply(this, args)
        } else {
            args.push(...arguments)
            return arguments.callee
        }
    }
}
let cost2 = (function () {
    let money = 0
    return function () {
        for (let i = 0; i < arguments.length; i++) {
            money += arguments[i]
        }
        return money;
    }
})()
let curryingCost = currying(cost2)
curryingCost(200, 300, 400)
console.log('curryingCost', curryingCost(500));
console.log('curryingCost', curryingCost());
// 4.2去柯里化 uncurrying

// 5.函数节流
// 场景 window.onresize mousemove 上传进度 点击按钮防止双击
let throttle = function (fn, interval) {
    let timer
    let firstTime = true
    return function () {
        if (firstTime) {
            fn.apply(this, arguments)
            return firstTime = false
        }
        if (timer) return false;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            clearTimeout(timer);
            timer = null;
        }, interval || 500);
    }
}
let print1 = function () {
    console.log('1', 1);
}
// window.onresize = throttle(print1, 1000)

// 5.1分批加载列表
let arr = new Array(100).fill(1)
// console.log('arr', arr)
let timechunk = function (arr, fn, count) {
    let timer;
    let start = function () {
        for (let i = 0; i < Math.min(count || 1, arr.length); i++) {
            fn(arr.shift())
        }
    }
    return function () {
        timer = setInterval(() => {
            if (arr.length) return clearInterval(timer);
            start()
        }, 200);
    }
}
let renderFriendList = function (item) {
    let div = document.createElement('div')
    div.innerHTML = String(item)
    document.body.appendChild(div)
}
let renderChunkList = timechunk(arr, renderFriendList, 8)
renderChunkList()

// 5.2惰性加载












