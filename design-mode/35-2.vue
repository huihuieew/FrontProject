<template>
    <div id="ball"></div>
    输入小球移动后的位置：<input id="pos" />
    <button id="moveBtn">开始移动</button>
    <button id="cancelBtn">取消</button>
</template>

<script>
let ball = document.getElementById('ball')
let pos = document.getElementById('pos')
let moveBtn = document.getElementById('moveBtn')
let cancelBtn = document.getElementById('cancelBtn')

moveBtn.onclick = function () {
    let animate = new Animate(ball)
    animate.start('left', pos.value, 1000, 'strongEaseOut')
}
let moveCommand = function (receiver, pos) {
    this.receiver = receiver
    this.pos = pos
    this.oldPos = null
}
moveCommand.prototype.execute = function () {
    this.receiver.start('left', this.pos, 1000, 'strongEaseOut')
    this.oldPos = this.receiver.dom.getBoundingClientRect()[this.receiver.proertyName]
}
moveCommand.prototype.undo = function () {
    this.receiver.start('left', this.oldPos, 1000, 'strongEaseOut')
}
let movecommand;
moveBtn.onclick = function () {
    let animate = new Animate(ball)
    movecommand = new moveCommand(animate, pos.value)
    movecommand.execute()
}
cancelBtn.onclick = function () {
    movecommand.undo()
}

// js版




</script>

<style>
#ball {
    position: absolute;
    background: #000;
    width: 50px;
    height: 50px;
}
</style>