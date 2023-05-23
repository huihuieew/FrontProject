// 设计模式  -- 针对特定问题的优雅方案
// 分辨模式的关键是意图 - 创建型模式 结构型模式 行为型模式

// 基础知识
// 鸭子类型 多态 封装 原型链

// 鸭子类型 像鸭子，有鸭子的功能就是鸭子
const duck = {
    ducksinging() {
        console.log('gagaga');
    }
}
const chicken = {
    ducksinging() {
        console.log('gagaga');
    }
}
let choir = [] // 合唱团
let joinChoir = function (animal) {
    if (animal && typeof animal.ducksinging === 'function') {
        choir.push(animal)
        console.log('恭喜加入合唱团');
        console.log('合唱团已有成员数量：' + choir.length);
    }
}
joinChoir(duck)
joinChoir(chicken)

// 对象的多态性
let makesound = (animal) => {
    animal.sound()
}
let duck1 = function () { }
duck.prototype.sound = function () {
    console.log('gagaga');
}
let chicken1 = function () { }
chicken.prototype.sound = function () {
    console.log('gegege');
}
makesound(new duck1())
makesound(new chicken1())

// 
let googleMap = {
    show() {
        console.log('开始渲染Google地图');
    }
}
// let renderMap = () => {
//     googleMap.show()
// }
let baiduMap = {
    show() {
        console.log('开始渲染百度地图');
    }
}
let renderMap = (map) => {
    if (!(map.show instanceof Function)) return;
    map.show()
}

// 封装 - 隐藏数据/实现细节
// 封装变化

// 类-对象 为 铸模-铸件的关系
// 克隆原型的方式 创建对象
// 对象的构造器有原型,对象把请求委托给它的构造器的原型
// 根对象 Object.prototype






















