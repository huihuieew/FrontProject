// 单一职责原则SRP
// 对象和方法

// 代理模式
let myImage = (() => {
    let imgNode = document.createElement('img')
    document.body.appendChild(imgNode)
    return {
        setSrc(src) {
            imgNode.src = src
        }
    }
})()
let proxyImage = (() => {
    let img = new Image()
    img.onload = () => {
        myImage.setSrc(this.src)
    }
    return {
        setSrc(src) {
            myImage.setSrc('file:// /c:/users/loading.gif')
            img.src = src
        }
    }
})()
proxyImage.setSrc('https://imgcache.qq.com/sheep.jpg')

// 迭代器模式  数组/对象/类数组/str/
let appendDiv = (data) => {
    let i = 0
    for (let item of data) {
        let div = document.createElement('div')
        div.innerHTML = String(item)
        document.appendChild(div)
    }
}
appendDiv([1, 2, 3, 4, 5])
appendDiv({ a: 1, b: 2, c: 3, d: 4 })

// 单例模式
let createLoginLayer = (() => {
    let div
    return () => {
        if (div) return div;
        div = document.createElement('div')
        div.innerHTML = '我是登录浮窗'
        div.style.display = 'none'
        document.body.appendChild(div)
        return div
    }
})()
let getSingle = (fn) => {
    let result
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}
let createLoginLayer1 = () => {
    let div = document.createElement('div')
    div.innerHTML = '我是登录浮窗'
    document.appendChild(div)
    return div
}
let createSingleLoginLayer = getSingle(createLoginLayer1)
let loginLayer1 = createSingleLoginLayer()
let loginLayer2 = createSingleLoginLayer()
alert(loginLayer1 === loginLayer2)

// 装饰者模式
// <button tag="login" id="button">点击打开登陆浮窗</button>
Function.prototype.after = (fn) => {
    let _self = this
    return function () {
        let ret = _self.apply(this, arguments)
        fn.apply(this, arguments)
        return ret
    }
}
let showLogin = function () {
    console.log('打开登陆浮窗');
}
let log = function () {
    console.log('上报标签为：' + this.getAttribute('tag'));
}
document.getElementById('button') && (document.getElementById('button').onclick = showLogin.after(log))







