// 享元模式

// 1.模特照相
let model = function (sex, underwear) {
    return {
        sex,
        underwear,
        takePhoto() {
            console.log(`sex:${this.sex},underwear:${this.underwear}`);
        }
    }
}
let male1 = model('male')
let female1 = model('female')
for (let i = 0; i < 5; i++) {
    male1.underwear = 'underwear_' + i
    male1.takePhoto()
}
// 内部状态独立，固定sex
// 外部状态变化，随时赋值

// 2.文件上传



