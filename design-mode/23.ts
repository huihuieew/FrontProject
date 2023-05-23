// 高阶函数
// fn作为参数或返回值传递

// 回调函数
let getUserinfo1 = function (userid, callback) {
    $.ajax('http://www.baidu.com/getuserinfo?' + userid, function (data) {
        if (typeof callback !== 'function') return;
        callback(data)
    })
}

let appendDiv1 = (callback) => {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div')
        div.innerHTML = i + ''
        if (typeof callback === 'function') callback(div);
        document.body.appendChild(div)
    }
}
appendDiv1(function (node) {
    node.style.display = 'none'
});

// sort
([1, 4, 3]).sort((a, b) => a - b) // 升序

// 函数作为返回值
let isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}
let isArray = isType('Array')
let isString = isType('String')
let isNumber = isType('Number')

// 单例模式
let getSingle1 = (fn) => {
    let ret
    return function () {
        return ret || (ret = fn.apply(this, arguments))
    }
}
let getScript = getSingle1(function () {
    return document.createElement('script')
})
let script1 = getScript()
let script2 = getScript()
alert(script1 === script2)

// 高阶函数 实现AOP 面向切面编程
// 把一个函数动态接入到另外一个函数中
Function.prototype.before = function (beforefn) {
    let _self = this
    return function () {
        // let ret = _self.apply(this, arguments)
        beforefn.apply(this, arguments)
        return _self.apply(this, arguments)
    }
}
Function.prototype.after = function (afterfn) {
    let _self = this
    return function () {
        let ret = _self.apply(this, arguments)
        afterfn.apply(this, arguments)
        return ret
    }
}
let fn12 = function () {
    console.log('2');
}
fn12 = fn12.before(function () {
    console.log('1');
}).after(function () {
    console.log('3');
})
fn12()

// 高阶函数 currying 函数柯里化
let monthlyCost = 0
let cost = function (money) {
    monthlyCost += money
}
cost(100)
cost(200)
cost(300)
alert(monthlyCost)

let cost1 = (function () {
    let args = []
    return function () {
        if (arguments.length === 0) {
            let money = 0
            for (let i = 0; i < args.length; i++) {
                money += args[i]
            }
            return money
        } else {
            [].push.apply(args, arguments)
        }
    }
})()
alert(cost1())

// 通用currying函数
let currying = function (fn) {
    let args = []
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
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
        return money
    }
})()
let cost3 = currying(cost2)
cost3(200)
cost3(300)
cost3(400)
alert(cost3())

// uncurrying 
let obj1 = {
    name: 'sven'
}
let obj2 = {
    getName() {
        return this.name
    }
}
alert(obj2.getName.call(obj1));

(function () {
    Array.prototype.push.call(arguments, 4)
    alert(arguments)
})(1, 2, 3)

Function.prototype.uncurrying = function () {
    let self = this
    return function () {
        let obj = Array.prototype.shift.call(arguments)
        return self.apply(obj, arguments)
    }
}
let push = Array.prototype.push.uncurrying();
(function () {
    push(arguments, 4)
    console.log(arguments);
})(1, 2, 3)

Function.prototype.uncurrying = function () {
    let self = this
    return function () {
        return Function.prototype.call.apply(self, arguments)
    }
}

// 函数节流
// window.onresize mousemove 上传进度

let throttle = function (fn, interval) {
    let timer
    let firstTime = true
    return function () {
        let args = arguments
        let _that = this
        if (firstTime) {
            fn.apply(_that, args)
            return firstTime = false
        }
        if (timer) {
            return false
        }
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            fn.apply(_that, args)
        }, interval || 500);
    }
}
window.onresize = throttle(function () {
    console.log('1');
}, 500)

// 分时函数
let ary: number[] = []
for (let i = 1; i <= 1000; i++) {
    ary.push(i)
}
let renderFriendList = function (list) {
    for (let i = 0; i < list.length; i++) {
        let div = document.createElement('div')
        div.innerHTML = i + ''
        document.body.appendChild(div)
    }
}
renderFriendList(ary)
// 改为每200ms创建8个节点
let timechunk = function (ary, fn, count) {
    let t
    let start = function () {
        for (let i = 0; i < Math.min(count || 1, ary.length); i++) {
            let obj = ary.shift()
            fn(obj)
        }
    }
    return function () {
        t = setInterval(function () {
            if (ary.length === 0) {
                return clearInterval(t)
            }
            start()
        }, 200)
    }
}
let ary1: number[] = []
for (let i = 0; i < 1000; i++) {
    ary1.push(i)
}
let renderFriendList1 = timechunk(ary1, function (n: string) {
    let div = document.createElement('div')
    div.innerHTML = n
    document.appendChild(div)
}, 8)
renderFriendList1()

// 惰性加载函数
let addEvent = function (el, type, handler) {
    if (window.addEventListener) {
        addEvent = function (el, type, handler) {
            el.addEventListener(type, handler, false)
        }
    } else if (window.attachEvent) {
        addEvent = function (el, type, handler) {
            el.attachEvent('on' + type, handler)
        }
    }
    addEvent(el, type, handler)
}
let div = document.getElementById('div1')
addEvent(div, 'click', function () {
    alert(1)
})
addEvent(div, 'click', function () {
    alert(2)
})














