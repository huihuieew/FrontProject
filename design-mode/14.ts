// 代码重构
// 模式与重构，设计模式提供重构指引

// 1. 提炼函数
let getUserinfo = function () {
    ajax('http://xxx.com/userinfo', (data) => {
        console.log('userid:' + data.userid);
        console.log('username:' + data.username);
        console.log('nickname:' + data.nickname);
    })
}

let getInfo = function () {
    ajax('http://xxx.com/userinfo', (data) => printDetail(data))
}
const printDetail = (data) => {
    console.log('userid:' + data.userid);
    console.log('username:' + data.username);
    console.log('nickname:' + data.nickname);
}

// 合并重复的条件片段
let paging = function (currpage) {
    if (currpage <= 0) {
        currpage = 0
        jump(currpage)
    } else if (currpage >= totalpage) {
        currpage = totalpage
        jump(currpage)
    } else {
        jump(currpage)
    }
    // jump(currpage)

}
const totalpage = 0
const jump = (currpage) => { }

// 条件分支提炼成函数
let getPrice = function (price) {
    let date = new Date()
    if (date.getMonth() >= 6 && date.getMonth() <= 9) {
        return price * 0.8
    }
    return price
}

let getprice = function (price) {
    return isSummer() ? price * 0.8 : price
}
const isSummer = () => {
    let date = new Date()
    return date.getMonth() >= 6 && date.getMonth() <= 9
}

// 合理使用循环
let createXHR = function () {
    let xhr;
    try {
        xhr = new XMLHttpRequest(1)
    } catch (e) {
        try {
            xhr = new XMLHttpRequest(2)
        } catch (e) {
            xhr = new XMLHttpRequest(3)
        }
    }
    return xhr
}
let createxhr = function () {
    let version = [1, 2, 3]
    for (let v of version) {
        try {
            return new XMLHttpRequest(v)
        } catch (e) { }
    }
}
let xhr = createxhr()

// 提前让函数退出代替嵌套条件分支
let del = function (obj) {
    let ret;
    if (!obj.isReadonly) {
        if (obj.isFolder) {
            ret = deleteFolder(obj)
        } else if (obj.isFile) {
            ret = deleteFile(obj)
        }
    }
    return ret
}
let dels = function (obj) {
    if (obj.isReadonly) return;
    if (obj.isFolder) return deleteFolder(obj)
    if (obj.isFile) return deleteFile(obj)
}

// 传递对象代替传递过长的参数列表
let setUserinfo = (id, name, address, sex, mobile, qq) {
    console.log(`id=${id}`);
    console.log(`name=${name}`);
    console.log(`address=${address}`);
    console.log(`sex=${sex}`);
    console.log(`mobile=${mobile}`);
    console.log(`qq=${qq}`);
}
setUserinfo(1314, 'sven', 'shenzhen', 'male', '137****', 377)
const setUserinfo1 = (options) => { };
setUserinfo1({
    id: '123',
    name: 'sven',
    address: 'shenzhen',
    sex: 'male',
    mobile: '137***',
    qq: '377'
});

// 合理使用链式调用
// 调试困难，链条稳定即可
const user = function () {
    this.id = null
    this.name = null
}
user.prototype.setId = (id) => {
    this.id = id
    return id
}
user.prototype.setName = function (name) {
    this.name = name
    return this
}
console.log(new user().setId('1').setName('sven'));

// 分解大型类
let spirit = function (name) {
    this.name = name
}
spirit.prototype.attack = (type) => {
    if (type == 'waveBoxing') {
        console.log(`${this.name}:使用波动拳`);
    } else if (type == 'whirlKick') {
        console.log(this.name + ':使用旋风腿');
    }
}
let spi = new spirit('RYU')
spi.attack('waveBoxing')

let attack = function (spirit) {
    this.spirit = spirit
}
attack.prototype.start = function (type) {
    return this.list[type].call(this)
}
attack.prototype.list = {
    waveBoxing() {
        console.log(this.spirit.name + ':使用波动拳');
    },
    whirlKick() {
        console.log(this.spirit.name + ':使用旋风腿');
    }
}

// 用return退出循环
let func = function () {
    let flag = false
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            flag = true
            break;
        }
        if (flag == true) {
            break;
        }
    }
}
let fn1 = function () {
    let outerloop;
    for (let i = 0; i < 10; i++) {
        let innerloop;
        for (let j = 0; j < 10; j++) {
            if (i * j > 30) {
                break outerloop
            }
        }
    }
}
// 直接退出循环
let print1 = (i) => { console.log('i:' + i); }
let fn2 = function () {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i * j > 30) {
                return print1(i)
            }
        }
    }
}
fn2()













