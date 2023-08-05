// 代理模式

// 1.Proxy使用
let person = {
    name: 'xiaohong',
    age: 8
}
let handler = {
    get(target, propKey, receiver) {
        console.log('get');
        return Reflect.has(target, propKey) ? Reflect.get(target, propKey, receiver) : 'undefined';
    }
}
let p = new Proxy(person, handler)
console.log('p.age', p.age);

// 2.校验器
const target = {
    _id: '1024',
    name: 'vuejs'
}
const validator = {
    name(val) {
        return typeof val === 'string'
    },
    _id(val) {
        return typeof val == 'number' && val > 1024
    }
}
const createValidator = function (target, validator) {
    return new Proxy(target, {
        set(target, propKey, value, receiver) {
            let valid = validator[propKey](value)
            if (valid) {
                return Reflect.set(target, propKey, value, receiver)
            } else {
                throw new Error(`Cannot set ${String(propKey)} to ${value}. Invalid type.`)
            }
        }
    })
}
let proxy = createValidator(target, validator)
// proxy.name = 1   // Cannot set name to 1. Invalid type.

// 3.私有属性
const target2 = {
    _id: '1024',
    name: 'vuejs'
}
const validator2 = {
    get(target, propKey, receiver) {
        console.log('get propKey', propKey);
        if (propKey[0] === '_') {
            throw new Error(`${String(propKey)} is restricted. get`)
        }
        return Reflect.get(target, propKey, receiver)
    },
    set(target, propKey, value, receiver) {
        console.log('set value', value);
        if (propKey[0] === '_') {
            throw new Error(`${String(propKey)} is restricted. set`)
        }
        return Reflect.set(target, propKey, value, receiver)
    }
}
const createValidator2 = function (target, validator) {
    return new Proxy(target, validator)
}
let proxy2 = createValidator2(target2, validator2)
proxy2.name = 'zhangsan'
proxy2.name
// proxy2._id = 1 // _id is restricted. set
// proxy2._id  // _id is restricted. get