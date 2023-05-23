// 代理模式
// 保护代理/虚拟代理
// 虚拟代理，把性能消耗大的操作，延迟到真正需要的时候执行


// js中虚拟(惰性)代理和缓存代理最常见
// 延迟大开销操作到需要时执行 http请求延迟 图片加载代理 惰性加载应用
// 请求缓存 计算结果缓存

// 虚拟代理实现图片预加载  单一职责原则
let myimage = (function () { // 为img设置src
    let imgnode = document.createElement('img')
    document.body.appendChild(imgnode)
    return {
        setsrc(src) {
            imgnode.src = src
        }
    }
})()
myimage.setsrc('http://like.jpg')
let proxyimg = (function () { // 为img添加loading动效
    let img = new Image()
    img.onload = function () {
        myimage.setsrc(img.src)
    }
    return {
        setsrc(src) {
            myimage.setsrc('file:// /c:loading.gif')
            img.src = src
        }
    }
})()
proxyimg.setsrc('http://like.jpg')

// 虚拟代理合并http请求
let synchronousFile = function (id) {
    console.log('开始同步文件：' + id);
}
let checkboxs = document.getElementsByTagName('input')
for (let ipt of checkboxs) {
    ipt.onclick = function () {
        if ((this as HTMLInputElement).checked) synchronousFile(this.id);
    }
}
// 2s延迟
let synchronousFile1 = function (id) {
    console.log('开始同步文件：' + id);
}
let proxySynchronousFile = (function () {
    let cache: any[] = []
    let timer: any = null
    return function (id) {
        cache.push(id)
        if (timer) return;
        timer = setTimeout(() => {
            synchronousFile(cache.join(','))
            clearTimeout(timer)
            timer = null
            cache = []
        }, 2000);
    }
})()
let checkboxs1 = document.getElementsByTagName('input')
for (let box of checkboxs1) {
    box.onclick = function () {
        if ((this as HTMLInputElement).checked) proxySynchronousFile((this as HTMLInputElement).id);
    }
}

// 虚拟代理的惰性加载
let cache1: any = []
let miniConsole = {
    log() {
        let args = arguments
        cache1.push(() => miniConsole.log.apply(miniConsole, args))
    }
}
miniConsole.log(1)
// 按下F2
let handler = function (e) {
    if (e.keyCode !== 113) return;
    let script = document.createElement('script')
    script.onload = function () {
        for (let fn of cache1) {
            fn()
        }
    }
    script.src = 'miniConsole.js'
    document.getElementsByTagName('head')[0].appendChild(script)
}
document.body.addEventListener('keydown', handler, false)
// miniConsole.js
miniConsole = {
    log() {
        console.log(Array.prototype.join.call(arguments))
    }
}
// 完整的虚拟代理
let miniConsole1 = (function () {
    let cache: any = []
    let handler = function (e) {
        if (e.keyCode !== 113) return;
        let script = document.createElement('script')
        script.onload = function () {
            for (let fn of cache) {
                fn()
            }
        }
        script.src = 'miniConsole.js'
        document.getElementsByTagName('head')[0].appendChild(script)
        document.body.removeEventListener('keydown', handler)
    }
    document.body.addEventListener('keydown', handler, false)
    return {
        log() {
            let args = arguments
            cache.push(() => miniConsole1.log.apply(miniConsole, args))
        }
    }
})()
miniConsole1.log(11)

// 缓存代理
let mult3 = function () {
    console.log('开始计算乘积');
    let a = 1
    for (let item in arguments) {
        a *= arguments[item]
    }
    return a
}
let proxymult = (function (mult) {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) return cache[args];
        return cache[args] = mult.apply(this, arguments)
    }
})()
// 分页中，异步请求，数据放入缓存中

// 高阶函数 动态创建代理  更加灵活
// 创建缓存代理的工厂
let mult4 = function () {
    let a = 1
    for (let item in arguments) {
        a *= arguments[item]
    }
    return a
}
let plus = function () {
    let a = 0
    for (let i = 0; i < arguments.length; i++) {
        a += arguments[i]
    }
    return a
}
let createProxyFactory = function (fn) {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) return cache[args];
        return cache[args] = fn.apply(this, arguments)
    }
}
let proxyMult = createProxyFactory(mult4)
let proxyPlus = createProxyFactory(plus)




























