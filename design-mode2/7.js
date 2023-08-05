// 组合模式

// 1.扫描文件
let folder = function (name) {
    return {
        name: name,
        files: [],
        add(file) {
            this.files.push(file)
        },
        scan() {
            console.log('开始扫描文件夹：', this.name);
            for (let file of this.files) {
                file.scan()
            }
        }
    }
}
let file = function (name) {
    return {
        name: name,
        add() {
            throw new Error('文件下面不能再添加文件')
        },
        scan() {
            console.log('开始扫描文件：', this.name);
        }
    }
}
let folder1 = folder('folder1')
let folder2 = folder('folder2')
let folder3 = folder('folder3')
let file1 = file('file1')
let file2 = file('file2')
let file3 = file('file3')

// 改变了树结构，但是不用修改代码 
// 开放-封闭原则
let folder4 = folder('folder4')
let file4 = file('file4')
folder4.add(folder3)
folder4.add(file4)
let file5 = file('file5')
folder4.add(file5)
folder4.scan()

// 开始扫描文件夹： folder4
// 开始扫描文件夹： folder3
// 开始扫描文件： file4
// 开始扫描文件： file5















