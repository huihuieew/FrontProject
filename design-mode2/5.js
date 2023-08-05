// 发布-订阅模式

// 1.通用模式  事件中心
let myevent = {
    clientList: {},
    listen(key, fn) {
        if (this.clientList[key]) {
            this.clientList[key].push(fn)
        } else {
            this.clientList[key] = [fn]
        }
    },
    trigger() {
        let key = Array.prototype.shift.call(arguments)
        let fns = this.clientList[key]
        if (!fns || fns.length === 0) return false;
        for (let fn of fns) {
            fn.apply(this, arguments)
        }
    },
    remove(key, fn) {
        let fns = this.clientList[key];
        if (!fns) return false;
        if (!fn) {
            this.clientList[key] = []
        } else {
            let i = 0;
            for (let _fn of fns) {
                (fn === _fn) && fns.splice(i, 1)
                i++
            }
        }
    }
}
let installEvent = function (obj) {
    Object.assign(obj, myevent)
}
let sales = {}
installEvent(sales)
sales.listen('click', function () {
    console.log('hello');
})
sales.listen('keydown', function () {
    console.log('dashboard');
})
sales.listen('click', function () {
    console.log('world');
})
sales.trigger('click')
sales.trigger('keydown')

// 2.模块间通信
let aa1 = (function () {
    let count = 0;
    let button = document.getElementById('count');
    button.onclick = function () {
        myevent.trigger('add', count++)
    }
})()
let bb1 = (function () {
    let div = document.getElementById('show')
    myevent.listen('add', function (count) {
        div.innerHTML = count;
    })
})()