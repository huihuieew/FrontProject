// 命令模式

// js版本 
// 1.宏命令
let closeDoor = () => {
    console.log('关门');
}
let openPC = () => {
    console.log('开电脑');
}
let loginQQ = () => {
    console.log('登录QQ');
}
let MacroTask = function () {
    return {
        taskList: [],
        add(task) {
            this.taskList.push(task)
        },
        execute() {
            for (let task of this.taskList) {
                task()
            }
            this.taskList = []
        }
    }
}
let macroTask1 = MacroTask()
macroTask1.add(closeDoor)
macroTask1.add(openPC)
macroTask1.add(loginQQ)
macroTask1.execute()

// 2.菜单
let bindClick = function (btn, fn) {
    btn.onclick = fn
}
let menuBar = {
    refresh() {
        console.log('刷新菜单界面')
    }
}
let submenu = {
    add() {
        console.log('增加子菜单');
    },
    del() {
        console.log('删除子菜单');
    }
}
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
bindClick(btn1, menuBar.refresh)
bindClick(btn2, submenu.add)
bindClick(btn3, submenu.del)

// 3.让小球动起来

// 4.播放录像
let Ryu = {
    attack() {
        console.log('攻击');
    },
    defense() {
        console.log('防御');
    },
    jump() {
        console.log('跳跃');
    },
    crouch() {
        console.log('蹲下');
    }
}
let commands = {
    '119': 'jump', // w
    '115': 'jump', // s
    '97': 'jump',  // a
    '100': 'jump', // d
}
let commandStack = [] // 保存命令的堆栈
let executeCommand = function (receiver, state) {
    return function () {
        receiver[state]()
    }
}
document.onkeypress = function (e) {
    let keyCode = e.keyCode
    let command = executeCommand(Ryu, commands[keyCode])
    if (!command) return;
    command()
    commandStack.push(command)
}
document.getElementById('replay').onclick = function () {
    let command;
    while (command = commandStack.shift()) {
        command()
    }
}






















