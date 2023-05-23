// 迭代器模式
// 提供访问聚合对象的方法    string arguments arr obj map set 中的迭代器 iterator function*() {}

// jquery迭代器
// $.each([1, 2, 3], function (i, n) {
//     console.log('当前下标：' + i);
//     console.log('当前值：' + n);
// })

// // 内部迭代器  外部迭代器
// // 内部迭代器
// let compare = function (arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         throw new Error('arr1和arr2不相等')
//     }
//     each(arr1, function (i, n) {
//         if (n !== arr2[i]) {
//             throw new Error('arr1和arr2不相等')
//         }
//     })
//     alert('arr1和arr2相等')
// }
// compare([1, 2, 3], [1, 2, 4])

// // 外部迭代器
// let iterator = function (obj) {
//     let current = 0
//     let next = function () {
//         current += 1
//     }
//     let isDone = function () {
//         return current >= obj.length
//     }
//     let getCurrItem = function () {
//         return obj[current]
//     }
//     return {
//         next, getCurrItem,
//         length: obj.length
//     }
// }
// // 
// let compare1 = function (iterator1, iterator2) {
//     if (iterator1.length !== iterator2.length) {
//         alert('iterator1和iterator2相等')
//     }
//     while (!iterator1.isDone() && !iterator2.isDone()) {
//         if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
//             throw new Error('iterator1和iterator2不相等')
//         }
//         iterator1.next()
//         iterator2.next()
//     }
//     alert('iterator1和iterator2相等')
// }
// let iterator1 = Iterator([1, 2, 3])
// let iterator2 = Iterator([1, 2, 3])
// compare1(iterator1, iterator2)

// // 迭代类数组对象 字面量对象
// $.each = function (obj, callback) {
//     let value
//     let i = 0
//     let length = obj.length
//     let isArray = isArray(obj)
//     if (isArray) {
//         for (; i < length; i++) {
//             value = callback.call(obj[i], i, obj[i])
//             if (value === false) {
//                 break;
//             }
//         }
//     }
//     return obj
// }

// // 倒序迭代器
// let reverseEach = function (arr, callback) {
//     for (let l = arr.length - 1; l >= 0; l--) {
//         callback(l, arr[l])
//     }
// }
// reverseEach([0, 1, 2], function (i, n) {
//     console.log(n);
// })

// // 中止迭代器
// let each = function (ary, callback) {
//     for (let i = 0; i < ary.length; i++) {
//         if (callback(i, ary[i]) === false) break;
//     }
// }
// each([1, 2, 3, 4, 5], function (i, n) {
//     if (n > 3) return false;
//     console.log(n);
// })

// // 迭代器模式的应用举例
// let getUploadObj = function () {
//     try {
//         return new ActiveXObject("TXF.upload")
//     } catch (e) {
//         if (supportFlash()) {
//             let str = '<object type></object>'
//             return ${ str }.appendTo(${ 'body'})
//         } else {
//             let str = '<input name="file" type="file"'
//             return ${ str }.appendTo(${ 'body'})
//         }
//     }
// }

// get
let arr3 = [1, 2, 3, 4]
for (let item of arr3) {
    console.log('item', item);
}

(function () {
    for (let item in arguments) {
        console.log('item', arguments[item]);
    }
})()
function* iter(length = 3) {
    for (let i = 0; i < length; i++) {
        yield i
    }
}
let it = iter(5)
it.next().value
it.next().done
let { value, done } = it.next()

// 可迭代对象 自定义可迭代对象  内置可迭代对象
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
[...myIterator]   // [1,2,3]

// 内置可迭代对象
// String Array Map Set
// 迭代对象的语法
// for of [...arr] yield*  let {a,b,c} = obj
// 解构赋值 展开参数







