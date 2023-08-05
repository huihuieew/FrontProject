// 鸭子类型  多态/封装/原型链

// 1.鸭子类型
const duck = {
    name: 'duck',
    duckSinging() {
        console.log('gagaga');
    }
}
const chicken = {
    name: 'chicken',
    duckSinging() {
        console.log('gagaga');
    }
}
let choir = []  // 合唱团
let joinChoir = function (animal) {
    if (animal && typeof animal.duckSinging === 'function') {
        choir.push(animal)
    }
}
joinChoir(duck)
joinChoir(chicken)
let singing = function () {
    for (let s of choir) {
        console.log('name', s.name);
        s.duckSinging()
    }
}
singing()

// 2.对象的多态性
let makeSound = (animal) => {
    animal.sound()
}
let duck2 = {
    sound() {
        console.log('2gagaga');
    }
}
let chicken2 = {
    sound() {
        console.log('2gegege');
    }
}
makeSound(duck2)
makeSound(chicken2)

// 3.渲染地图
let googleMap = {
    show() {
        console.log('开始渲染Goole地图');
    }
}
let baiduMap = {
    show() {
        console.log('开始渲染Baidu地图');
    }
}
let renderMap = (map) => {
    if (map && typeof map.show === 'function') {
        map.show()
    }
}
renderMap(baiduMap)