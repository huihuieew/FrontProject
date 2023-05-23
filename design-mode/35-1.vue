菜单模式

<template>
    <button id="btn1">click1</button>
    <button id="btn2">click2</button>
    <button id="btn3">click3</button>
</template>

<script lang="ts">
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

let setCommand = function (btn, command) {
    btn.onclick = function () {
        command.execute()
    }
}
// 刷新菜单 增加子菜单 删除子菜单 menubar submenu
let MenuBar = {
    refresh() {
        console.log('刷新菜单目录');
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

// 将行为封装在命令对象中
let RefreshMenuCommand = function (receiver) {
    this.receiver = receiver
}
RefreshMenuCommand.prototype.execute = function () {
    this.receiver.refresh()
}
let AddMenuCommand = function (receiver) {
    this.receiver = receiver
}
AddMenuCommand.prototype.execute = function () {
    this.receiver.add()
}
let DelMenuCommand = function (receiver) {
    this.receiver = receiver
}
DelMenuCommand.prototype.execute = function () {
    this.receiver.del()
}
// 把命令接收者传入command对象中
let refreshMenuCommand = new RefreshMenuCommand(MenuBar)
let addMenuCommand = new AddMenuCommand(submenu)
let delMenuCommand = new DelMenuCommand(submenu)
let refreshMenuCommand1 = {
    execute() {
        MenuBar.refresh()
    }
}
setCommand(btn1, refreshMenuCommand)
setCommand(btn1, refreshMenuCommand1)

// js版
let bindClick = function (btn, func) {
    btn.onclick = func
}
let MenuBar1 = {
    refresh() {
        console.log('刷新菜单界面');
    }
}
let submenu1 = {
    add() {
        console.log('增加子菜单');
    },
    del() {
        console.log('删除子菜单');
    }
}
// 后续
bindClick(btn1, MenuBar1.refresh)
bindClick(btn2, submenu1.add)
bindClick(btn3, submenu1.del)  // 策略模式 命令模式 融入js中了



</script>