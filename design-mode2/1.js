// 单例模式
let singleton = function (name) {
    this.name = name
    this.instance = null
}
singleton.prototype.getName = function () {
    return this.name
}
singleton.getInstance = function (name) {
    if (this.instance) return this.instance;
    return this.instance = new singleton(name)
}
// singleton.prototype.getInstance = function (name) {
//     if (this.instance) return this.instance;
//     return this.instance = new singleton(name)
// }
let sina = singleton.getInstance('sven1')
let sinb = singleton.getInstance('sven2')
console.log('sina=sinb', sina === sinb, sina);
console.log('name', sinb.getName());


let singleton2 = function (name) {
    this.name = name
}
singleton2.prototype.getName = function () {
    return this.name;
}
singleton2.getInstance = (function () {
    let instance = null;
    return function (name) {
        if (instance) return instance;
        instance = new singleton2(name)
        return instance;
    }
})()
let sina2 = singleton2.getInstance('sven1');
let sinb2 = singleton2.getInstance('sven2');
console.log('sina2', sina2 === sinb2, sinb2);

// 透明单例模式
// 代理单例模式
// 惰性单例

// 单例模式相关实际使用案例的demo

// 适合js的单例模式
// 单例核心，只有一个实例，并供全局访问
// 1.动态创建命名空间
let namespace = {
    a() {
        console.log('1');
    },
    b() {
        console.log('2');
    },
}
// 2.闭包封装私有变量
let user = (function () {
    let _name = 'sven'
    let _age = 27
    return {
        getUserinfo() {
            return `${_name}-${_age}`
        }
    }
})()

// 3.登陆浮窗
let createLoginLayer = (function () {
    let div
    return function () {
        if (div) return div;
        div = document.createElement('div');
        div.innerHTML = '我是登陆浮窗';
        div.style.display = 'none';
        document.body.appendChild(div)
        return div;
    }
})()
document.getElementById('loginBtn').onclick = function () {
    let loginLayer = createLoginLayer();
    loginLayer.style.display = 'block';
}

// 创建实例/管理单例职责分离
// 4.通用单例
let getSingle = function (fn) {
    let result;
    return function () {
        if (result) return result;
        return result = fn.apply(this, arguments)
    }
}
// 创建浮窗单例
let createLayer = function () {
    let div = document.createElement('div');
    div.innerHTML = '我是登陆浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div
}
let createSingleLayer = getSingle(createLayer)
document.getElementById('loginBtn').onclick = function () {
    let div = createSingleLayer();
    div.style.display = 'block'
}
// 创建文档片段单例
let createIframe = function () {
    let iframe = document.getElementById('iframe');
    document.body.appendChild(iframe)
    return iframe;
}
let createSingleIframe = getSingle(createIframe);
document.getElementById('loginBtn').onclick = function () {
    let iframe = createIframe()
    iframe.src = 'http://baidu.com'
}

// 5.单例模式不止创建对象

