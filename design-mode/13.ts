// 接口 面向接口编程

// 面向对象程序设计

function show(obj) {
    const isFunction = (obj) => obj && typeof obj.show === 'function';
    if (!isFunction(obj)) return;
    obj.show()
}

function show1(obj) {
    try {
        obj.show()
    } catch (e) {
        console.log('e', e);
    }
}
let myobj = {}
let myobj1 = {
    show: 1
}
show(myobj)

// 鸭子类型
// isArray
let arr = []
Object.prototype.toString.call(arr) === '[object Array]'

// 闭包 高阶函数
// <button id="exeCommand">执行菜单命令</button>
let refreshMenuBarCommand = function () { }
refreshMenuBarCommand.prototype.execute = function () {
    console.log('刷新菜单界面');
}
let addSubMenuCommand = function () { }
addSubMenuCommand.prototype.execute = function () {
    console.log('增加子菜单');
}
let delSubMenuCommand = function () { }
delSubMenuCommand.prototype.execute = function () {
    console.log('删除子菜单');
}
let refresh = new refreshMenuBarCommand()
let add = new addSubMenuCommand()
let del = new delSubMenuCommand()
let setCommand = function (command) {
    if (typeof command.execute !== 'function') {
        throw new Error('command对象必须实现execute')
    }
    (document.getElementById('exeCommand') as HTMLElement).onclick = function () {
        command.execute()
    }
}
setCommand(refresh)
setCommand(add)
setCommand(del)

interface Command {
    execute: Function
}
class refreshMenuBarCommand1 implements Command {
    constructor() { }
    execute() {
        console.log('刷新菜单界面');
    }
}
class addSubMenuCommand1 implements Command {
    constructor() { }
    execute() {
        console.log('添加子菜单');
    };
}
class delSubMenuCommand1 implements Command {
    constructor() { }
    execute() {
        console.log('删除子菜单');
    };
}
let refresh1 = new refreshMenuBarCommand1()
refresh1.execute()

let refresh2 = (function () {
    function refreshCommand() { }
    refreshCommand.prototype.execute = function () {
        console.log('刷新菜单界面');
    }
    return refreshCommand
})()
let add2 = (function () {
    function addCommand() { }
    addCommand.prototype.execute = function () {
        console.log('添加子菜单');
    }
    return addCommand
})()
let r = new refresh2()
let aa = new add2()
r.execute()
aa.execute()























