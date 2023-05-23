// 命令模式  执行某些特定事情的指令 请求者和接收者消除耦合
// 能执行/撤销/排队等


// 菜单模式

// 宏命令
let closeDoorCommand = {
    execute() {
        console.log('关门');
    }
}
let openPcCommand = {
    execute() {
        console.log('开电脑');
    }
}
let openQQCommand = {
    execute() {
        console.log('登陆QQ');
    }
}

let MicroCommand = function () {
    return {
        commandList: [],
        add(command) {
            this.commandList.push(command)
        },
        execute() {
            for (let c of this.commandList) {
                c.execute()
            }
        }
    }
}
let microCommand = MicroCommand()
microCommand.add(closeDoorCommand)
microCommand.add(openPcCommand)
microCommand.add(openQQCommand)
microCommand.execute()

// js版
let closeDoor = () => {
    console.log('关门');
}
let openPc = () => {
    console.log('开电脑');
}
let loginQQ = () => {
    console.log('等QQ');
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
// let macroTask = {
//     taskList: [],
//     add(task) {
//         this.taskList.push(task)
//     },
//     execute() {
//         for (let task of this.taskList) {
//             task()
//         }
//         this.taskList = []
//     }
// }
let macroTask = MacroTask()
macroTask.add(closeDoor)
macroTask.add(openPc)
macroTask.add(loginQQ)
macroTask.execute()

















































