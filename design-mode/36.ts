// 组合模式   小的子对象合成更大的对象

// 宏命令

// js版
let closeDoor1 = () => {
    console.log('关门');
}
let openPc1 = () => {
    console.log('开电脑');
}
let loginQQ1 = () => {
    console.log('等QQ');
}

let MacroTask1 = function () {
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
let macroTask1 = MacroTask1()
macroTask1.add(closeDoor)
macroTask1.add(openPc)
macroTask1.add(loginQQ)
macroTask1.execute()





































