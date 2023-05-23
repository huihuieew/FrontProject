// 撤销和重做

<template>
    <button id="replay">播放录像</button>
</template>

<script lang="ts">
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
    },
}
let makeCommand = function (receiver, state) { // 创建命令
    return function () {
        receiver[state]()
    }
}
let commands = {
    '119': 'jump',   // w
    '115': 'crouch', // a
    '97': 'defense', // s
    '100': 'attack', // d
}
let commandStack: any[] = [] // 保存命令的堆栈
document.onkeypress = function (e) {
    let keyCode = e.keyCode
    let command = makeCommand(Ryu, commands[keyCode])
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


</script>