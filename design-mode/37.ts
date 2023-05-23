// 享元模式    性能优化，内存占用

let model = function (sex, underwear) {
    this.sex = sex
    this.underwear = underwear
}
model.prototype.takePhoto = function () {
    console.log(`sex=${this.sex};underwear=${this.underwear}`);
}
for (let i = 0; i < 50; i++) {
    let maleModel = new model('male', 'underwear' + i)
    maleModel.takePhoto()
}
for (let i = 0; i < 50; i++) {
    let femaleModel = new model('female', 'underwear' + i)
    femaleModel.takePhoto()
}
let Model1 = function (sex) {
    this.sex = sex
}
Model1.prototype.takePhoto = function () {
    console.log(`sex=${this.sex};underwear=${this.underwear}`);
}
// 
let maleModel1 = new Model1('male')
let femaleModel1 = new Model1('female')
for (let i = 0; i <= 50; i++) {
    maleModel1.underwear = 'underwear' + i
    maleModel1.takePhoto()
}

// 内部状态 独立于场景
// 外部状态 具体场景

// 文件上传

































