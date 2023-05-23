// 扫描文件夹
let Folder = function (name) {
    this.name = name
    this.files = []
}
Folder.prototype.add = function (file) {
    this.files.push(file)
}
Folder.prototype.scan = function () {
    console.log('开始扫描文件夹' + this.name);
    for (let file of this.files) {
        file.scan()
    }
}
let File1 = function (name) {
    this.name
}
File1.prototype.add = function () {
    throw new Error('文件下面不能再添加文件')
}
File1.prototype.scan = function () {
    console.log('开始扫描文件：' + this.name);
}
let folder1 = new Folder('学习资料')
let folder2 = new Folder('javascript')
let folder3 = new Folder('jquery')

let file1 = new File1('javascript')
let file2 = new File1('jquery')
let file3 = new File1('animate')

// 改变了树结构，不用修改代码，符合开放-封闭原则；
let folder4 = new Folder('Node.js')
let file4 = new File1('Node.js')
folder4.add(folder3)

let file5 = new File1('javasript精华')
folder4.add(folder3)
folder4.add(file5)
folder4.scan()

// 引用父对象
let Folder1 = function (name) {
    this.name = name
    this.parent = null
    this.files = []
}
Folder1.prototype.add = function (file) {
    file.parent = this
    this.files.push(file)
}
Folder1.prototype.scan = function () {
    console.log('开始扫描文件夹：' + this.name);
    for (let file of this.files) {
        file.scan()
    }
}
Folder1.prototype.remove = function () {
    if (!this.parent) return;
    let l = 0
    for (let file of this.parent.files) {
        if (file === this) this.parent.files.splice(l, 1);
        l++
    }
}



























