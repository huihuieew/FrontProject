// 发布-订阅模式 发布者 订阅者 事件中心
// 广泛应用在异步编程中
// 解耦发布者 / 订阅者
// document.body.addEventListener('click', () => {
//     alert(2)
// }, false)
// document.body.addEventListener('click', () => {
//     alert(3)
// }, false)
// document.body.addEventListener('click', () => {
//     alert(4)
// }, false)
// document.body.click()

// 自定义事件
let salesOffices = {}
salesOffices.clientList = []
salesOffices.listen = function (fn) { // 增加订阅者
    this.clientList.push(fn)
}
salesOffices.trigger = function () { // 发布消息
    for (let fn of this.clientList) {
        fn.apply(this, arguments)
    }
}
salesOffices.listen((price, squareMeter) => {
    console.log('价格' + price);
})
salesOffices.listen((price, squareMeter) => {
    console.log('价格=' + price);
})
salesOffices.trigger(2000, 1)
salesOffices.trigger(4000, 2)

// let salesOffices1 = {}
// salesOffices1.clientList = {}
// salesOffices1.listen = function (key, fn) {
//     if (!this.clientList[key]) {
//         this.clientList[key] = []
//     }
//     this.clientList[key].push(fn)
// }
// salesOffices1.trigger = function () {
//     let key = arguments[0]
//     for (let fn of this.clientList[key]) {
//         fn.apply(this, arguments[1])
//     }
// }
// salesOffices1.listen(('k88', (price) => {
//     console.log('price' + price);
// }))
// salesOffices1.listen(('k110', (price) => {
//     console.log('price=' + price);
// }))
// salesOffices1.trigger('k88', 3000)
// salesOffices1.trigger('k110', 6000)

// 通用发布-订阅模式  事件中心
let event1 = {
    clientList: {},
    listen(key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
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
        let fns = this.clientList[key]
        if (!fns) return false;
        if (!fn) {
            fns && (this.clientList[key] = [])
        } else {
            let i = 0
            for (let _fn of fns) {
                (_fn === fn) && fns.splice(i, 1)
                i++
            }
        }
    }
}
let installEvent = function (obj) {
    for (let i in event1) {
        obj[i] = event1[i]
    }
}
let salesOffices2 = {}
installEvent(salesOffices2)
const fn3 = function (price) {
    console.log('价格' + price);
}
salesOffices2.listen('88', fn3)
salesOffices2.listen('88', function (price) {
    console.log('价格折扣后' + price * 0.8);
})
salesOffices2.listen('100', function (price) {
    console.log('价格=' + price);
})
salesOffices2.trigger('88', 2000)
salesOffices2.trigger('100', 3000)

// 取消订阅事件
event1.remove = function (key, fn) {
    let fns = this.clientList[key]
    if (!fns) return false;
    if (!fn) {
        fns && (this.clientList[key] = [])
    } else {
        let i = 0
        for (let _fn of fns) {
            (_fn === fn) && fns.splice(i, 1)
            i++
        }
    }
}
salesOffices2.remove('88', fn3)
salesOffices2.trigger('88', 2000)

// 真实案例   网站登陆 获取用户信息，刷新模块数据
// let login = {}
// login.succ((data) => {
//     header.setAvatar(data.avatar)    // 设置header模块头像
//     nav.setAvatar(data.avatar)       // 设置导航模块头像
//     message.refresh()                // 刷新消息列表
//     cart.refresh()                   // 刷新购物车列表
//     address.refresh()                // 刷新收获地址模块
// })
// $.ajax('http://xxx.com?login', (data) => {
//     login.trigger('loginSucc', data)
// })
// // 各模块监听登陆成功的消息
// let header = (function () {  // header模块
//     login.listen('loginSucc', (data) => {
//         header.setAvatar(data.avatar)
//     })
//     return {
//         setAvatar(data) {
//             console.log('设置header模块的头像');
//         }
//     }
// })()
// let nav = (function () {  // nav模块
//     login.listen('loginSucc', (data) => {
//         header.setAvatar(data.avatar)
//     })
//     return {
//         setAvatar(data) {
//             console.log('设置nav模块的头像');
//         }
//     }
// })()
// let address = (function () {
//     login.listen('loginSucc', (obj) => {
//         address.refresh(obj)
//     })
//     return {
//         refresh(avatar) {
//             console.log('刷新收获地址列表');
//         }
//     }
// })

// 全局的发布-订阅对象
let Event1 = (function () {
    let clientList = {}
    let listen = function (key, fn) {
        if (!clientList[key]) clientList[key] = [];
        clientList[key].push(fn)
    }
    let trigger = function () {
        let key = Array.prototype.shift.call(arguments)
        let fns = clientList[key]
        if (!fns || fns.length === 0) return false;
        for (let fn of fns) {
            fn.apply(this, arguments)
        }
    }
    let remove = function (key, fn) {
        let fns = clientList[key]
        if (!fns) return false
        if (!fn) fns = [];
        let i = 0
        for (let _fn of fns) {
            (_fn === fn) && (fns.splice(i, 1))
            i++
        }
    }
    return {
        listen,
        trigger,
        remove
    }
})()
let Event2 = {
    clientList: {},
    listen(key, fn) {
        if (!this.clientList[key]) this.clientList[key] = [];
        this.clientList[key].push(fn)
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
        let fns = this.clientList[key]
        if (!fns) return false
        if (!fn) fns = [];
        let i = 0
        for (let _fn of fns) {
            (_fn === fn) && (fns.splice(i, 1))
            i++
        }
    }
}
Event2.listen('88', (price) => {
    console.log('jiage' + price);
})
Event2.trigger('88', 9000)

// 模块间通信
let aa1 = (function () {
    let count = 0
    let button = document.getElementById('count')
    button?.onclick = function () {
        Event2.trigger('add', count++)
    }
})()
let bb1 = (function () {
    let div = document.getElementById('show')
    Event2.listen('add', function (count) {
        div?.innerHTML = count
    })
})()

// 先订阅在发布，先发布再订阅

// 全局事件的命名冲突
// 发布-订阅混乱




