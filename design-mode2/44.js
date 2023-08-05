// 代码重构  设计模式提供指引

// 1.提炼函数
let getUserInfo = function () {
    const printDetail = data => {
        console.log('userid:' + data.userid);
        console.log('username:' + data.username);
        console.log('nickname:' + data.nickname);
    }
    ajax('http://xxx.com/userinfo', printDetail)
}

// 2.合并重复的条件片段
let paging = function (currpage) {
    if (currpage <= 0) {
        currpage = 0
    } else if (currpage >= totalpage) {
        currpage = totalpage
    }
    jump(currpage)
}
let totalpage = 3
let jump = (currpage) => {
    console.log('currpage', currpage);
}

// 3.条件分支提炼出函数
let getPrice = function (price) {
    const isSumber = () => {
        let date = new Date()
        let currMonth = date.getMonth() + 1
        return currMonth >= 6 && currMonth <= 9
    }
    return isSumber() ? price * 0.8 : price
}

// 4.合理使用循环
let createxhr = function () {
    let version = [1, 2, 3]
    for (let v of version) {
        try {
            return new XMLHttpRequest(v)
        } catch (e) {
            console.log('e', e);
        }
    }
}
let xhr = createxhr()

// 5.提前让函数退出 代替嵌套条件分支
let del = function (obj) {
    let ret;
    if (!obj.isReadonly) {
        if (obj.isFolder) {
            ret = deleteFolder(obj)
        } else if (obj.isFile) {
            ret = deleteFile(obj)
        }
    }
    return ret;
}
let del_s = function (obj) {
    if (obj.isReadonly) return;
    if (obj.isFile) return deleteFile(obj);
    if (obj.isFolder) return deleteFolder(obj);
}

// 6.传递对象 代替过长的参数列表
let setUserinfo = (options) => {
    let defaultOptions = {
        id: '1',
        name: 'sven',
        address: 'shenzhen',
        sex: 'male',
        mobile: 'male',
        qq: '377'
    }
    return Object.assign(defaultOptions, options)
}
console.log('setUserinfo', setUserinfo({ name: 'charlie' }));

// 7.链式调用  链式稳定，避免调试困难
const user = function () {
    return {
        name: null,
        id: null,
        setName(name) {
            this.name = name
            return this;
        },
        setId(id) {
            this.id = id
            return this;
        }
    }
}
console.log('lianshi', user().setId(11).setName('lisi'))

// 8.分解大型类/对象
let spirit = function (name) {
    return {
        name,
        attack(type) {
            if (type == 'waveBoxing') {
                console.log(`${this.name}:使用波动拳`);
            } else if (type == 'whirlKick') {
                console.log(`${this.name}:使用旋风腿`);
            }
        }
    }
}
let spi1 = spirit('RYU')
spi1.attack('waveBoxing')
// 将攻击对象和人物对象分开  面向对象编程 面向过程编程
let attack = function (spirit) {
    return {
        spirit,
        start(type) {
            this.list[type].call(this)
        },
        list: {
            waveBoxing() {
                console.log(this.spirit.name + '：使用波动拳');
            },
            whirlKick() {
                console.log(this.spirit.name + '：使用旋风腿');
            }
        }
    }
}

// 9.用return退出循环
let fn1 = function () {
    let flag = false
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            flag = true;
            break;
        }
        if (flag == true) {
            break;
        }
    }
}
let fn2 = function () {
    let outerloop
    for (let i = 0; i < 10; i++) {
        let innerloop;
        for (let j = 0; j < 10; j++) {
            if (i * j > 30) {
                // break innerloop;
                break;
            }
        }
    }
}
let print3 = (i, j) => console.log('i:' + i + ',j:' + j);
let fn3 = function () {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i * j > 30) {
                return print3(i, j)
            }
        }
    }
}
fn3()