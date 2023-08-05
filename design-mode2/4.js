// 迭代器模式
// 提供访问聚合对象的方法

// for ...in...      for ...of...
// [...arr]  let {a,b,c} = obj
// yield*
// 内置可迭代对象 String Array Map Set

// 可迭代对象
// 1.自定义可迭代对象
let myIterator = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}
for (let value of myIterator) {
    console.log('value', value);
}
[...myIterator] // [1,2,3]

// 2.迭代器函数
function* iter(length = 3) {
    for (let i = 0; i < length; i++) {
        yield i;
    }
}
let it = iter(5)
it.next().value
it.next().done
let { value, done } = it.next()
































