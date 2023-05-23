// 设计模式
// js 常见14种设计模式
// 函数作为一等对象
// 对象多态性，命令模式，策略模式，以融入语言中

// 单例模式 策略模式 代理模式 迭代器模式 发布-订阅模式 命令模式 组合模式
// 模板方法模式 享元模式 职责链模式 中介者模式 装饰者模式 状态模式 适配器模式

// 单一职责原则 最少知识原则 开放-封闭原则
// 面向接口编程 接口  代码重构


// 单例模式
let singleton = function (name) {
    this.name = name
    this.instance = null
}
singleton.prototype.getname = function () {
    alert(this.name)
}
singleton.getInstance = function (name) {
    if (this.instance) return this.instance
    return this.instance = new singleton(name)
}
let sina = singleton.getInstance('sven1')
let sinb = singleton.getInstance('sven2')
console.log(sina === sinb);

// or
let singleton1 = function (name) {
    this.name = name
}
singleton1.prototype.getname = function () {
    alert(this.name)
}
singleton1.getInstance = (function () {
    let instance = null
    return function (name) {
        if (instance) return instance
        instance = new singleton1(name)
        return instance
    }
})()
let sina1 = singleton1.getInstance('sven1')
let sinb1 = singleton1.getInstance('sven2')
console.log(sina1 === sinb1)

// 透明单例模式
let creatediv = (function () {
    let instance
    let creatediv = function (html) {
        if (instance) return instance
        this.html = html
        this.init()
        return instance = this
    }
    creatediv.prototype.init = function () {
        let div = document.createElement('div')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }
    return creatediv
})()
let diva = new creatediv('sven1')
let divb = new creatediv('sven2')
console.log(diva === divb)

// 代理实现单例模式
let creatediv1 = function (html) {
    this.html = html
    this.init()
}
creatediv1.prototype.init = function () {
    let div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
}
// 代理类
let proxySingletonCreatediv = (function () {
    let instance
    return function (html) {
        if (instance) return instance;
        return instance = new creatediv1(html)
    }
})()
let proxya = new proxySingletonCreatediv('sven1')
let proxyb = new proxySingletonCreatediv('sven2')
console.log(proxya === proxyb)

// 适合js的单例模式
// 单例核心，只有一个实例并供全局访问
// 1.命名空间
let namespace1 = {
    a() {
        alert(1)
    },
    b() {
        alert(2)
    }
}
// 动态创建命名空间
let myapp = {}
myapp.namespace = function (name) {
    let parts = name.split('.')
    let current = myapp
    for (let item in parts) {
        if (!current[parts[item]]) {
            current[parts[item]] = {}
        }
        current = current[parts[item]]
    }
}
myapp.namespace('event')
myapp.namespace('dom.style')
// equal to 
let myapp = {
    event: {},
    dom: {
        style: {}
    }
}

// 使用闭包封装私有变量
let user1 = (function () {
    let _name = 'sven'
    let _age = 27
    return {
        getUserinfo() {
            return `${_name}-${_age}`
        }
    }
})()

// 惰性单例
let singleton2.getInstance = (function () {
    let instance = null
    return function (name) {
        if (instance) return instance;
        instance = new singleton2(name)
        return instance
    }
})()
// 登陆浮窗
let createLoginLayer2 = (function () {
    let div
    return function () {
        if (div) return div;
        div = document.createElement('div')
        div.innerHTML = '我是登陆浮窗'
        div.style.display = 'none'
        document.body.appendChild(div)
        return div
    }
})()
document.getElementById('loginBtn').onclick = function () {
    let loginLayer = createLoginLayer2()
    loginLayer.style.display = 'block'
}

// 通用单例
let createIframe = (function () {
    let iframe
    return function () {
        if (iframe) return iframe;
        iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        document.body.appendChild(iframe)
        return iframe
    }
})()
let getSingle2 = function (fn) {
    let result
    return function () {
        if (result) return result;
        return result = fn.apply(this, arguments)
    }
}
let createLoginLayer3 = function () {
    let div = document.createElement('div')
    div.innerHTML = '我是登陆浮窗'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
}
let createSingleLoginLayer1 = getSingle2(createLoginLayer3)
document.getElementById('loginBtn').onclick = function () {
    let div = createSingleLoginLayer1()
    div.style.display = 'block'
}
// 创建实例 / 管理单例的职责分离
let createIframe1 = function () {
    let iframe = document.getElementById('iframe')
    document.body.appendChild(iframe)
    return iframe
}
let createSingleIframe = getSingle2(createIframe1)
document.getElementById('loginBtn').onclick = function () {
    let iframe = createSingleIframe()
    iframe.src = 'http://baidu.com'
}

// 单例模式，不止创建对象
























