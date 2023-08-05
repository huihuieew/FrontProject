// 代理模式

// 1.图片预加载
let myImage = (function () {
    let imgnode = document.createElement('img')
    document.body.appendChild(imgnode)
    return {
        setSrc(src) {
            imgnode.src = src
        }
    }
})()
myImage.setSrc('http://like.jpg')
// 添加loading效果
let proxyimg = (function () {
    let img = new Image();
    img.onload = function () {
        myImage.setSrc(img.src)
    }
    return {
        setSrc(src) {
            myImage.setSrc('file:// /c:loading.gif')
            img.src = src;
        }
    }
})()
proxyimg.setSrc('http://like.png')

// 2.合并http请求
let file = function (id) {
    console.log('开始同步文件：' + id);
}
let proxyFile = (function () {
    let cache = []
    let timer = null
    return function (id) {
        cache.push(id)
        if (timer) return;
        timer = setTimeout(() => {
            file(cache.join(','))
            clearTimeout(timer)
            cache = []
            timer = null
        }, 1000 * 2);
    }
})()
let checkbox = document.getElementsByTagName('input')
for (let box of checkbox) {
    box.onclick = function () {
        // this as HTMLInputElement
        if (this.checked) {
            proxyFile(this.id)
        }
    }
}

// 3.惰性加载 mini打印台
let miniConsole = (function () {
    let cache = []
    let handler = function (e) {
        // 不为f12则返回
        if (e.keyCode !== 113) return;
        let script = document.createElement('script');
        script.onload = function () {
            for (let fn of cache) {
                fn()
            }
        }
        script.src = 'miniConsole.js'
        document.getElementsByTagName('head')[0].appendChild(script);
        document.body.removeEventListener('keydown', handler)
    }
    document.body.addEventListener('keydown', handler)
    return {
        log() {
            let args = arguments;
            cache.push(() => miniConsole.log.apply(miniConsole, args))
        }
    }
})()
miniConsole.log(11)

// 4.缓存代理 计算乘积
let mult = function () {
    console.log('开始计算乘积');
    let a = 1;
    for (let item in arguments) {
        a *= arguments[item]
    }
    return a;
}
let proxyMult = (function (mult) {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) return cache[args];
        return cache[args] = mult.apply(this, arguments)
    }
})()

// 5.创建缓存代理工厂
let multFn = function () {
    let a = 1
    for (let item in arguments) {
        a *= arguments[item]
    }
    return a;
}
let plus = function () {
    let a = 0
    for (let item in arguments) {
        a += item
    }
    return a;
}
let proxyFactory = function (fn) {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) return cache[args];
        console.log('12');
        return cache[args] = fn.apply(this, arguments)
    }
}
let proxyMultFn = proxyFactory(multFn)
let proxyPlus = proxyFactory(plus)
proxyPlus(1, 2, 3)
proxyPlus(1, 2, 4)
proxyPlus(1, 2, 4)


