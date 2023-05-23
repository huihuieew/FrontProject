// 代理模式
// 阮一峰书中介绍示例 js装饰器使用
// 代理模式在实际业务场景中的应用有哪些

let person = {
    name:'xiaohong',
    age: 8
}
let handler = {
    get(target,propKey,receiver) {
        console.log('get');
        
        return Reflect.has(target,propKey) ? Reflect.get(target,propKey,receiver) : 'none'
    }
}
let p = new Proxy(person,handler)

// 从服务端获取的数据希望只读
const response = {
    data: {
        name:'hhh',
        aga: 222
    }
}
for (let [key] of Object.entries(response.data)) {
    Object.defineProperty(response.data,key,{
        writable:false
    })
}
let data = new Proxy(response.data,{
    set(obj,key,value,receiver) {
        return false
    }
})
// 数据交互时，验证器
const validator = (obj,key,val,receiver) => {
    if (Reflect.has(obj,key) && val > 20) {
        obj[key] = val
        return true
    }
    return false
}
let date2 = new Proxy(response.data,{
    set:validator
})
// 读写监控
let validator2 = {
    set(target,key,val,receiver) {
        if (key === 'age') {
            if (typeof val !== 'number' || Number.isNaN(val)) {
                throw new TypeError('Age must be a number')
            }
            if (val <= 0) {
                throw new TypeError('Age must be a positive number')
            }
        }
        return true
    }
}
const person2 = new Proxy(person,validator2)
window.addEventListener('error',e => console.log(e.message),true)

// 元编程
const proxy1 = new Proxy(target,handler)

const origin = {}
const obj = new Proxy(origin,{
    get(target,propKey,receiver) { // receiver proxy本身
        return '10'
    }
})
obj.a // 10
obj.b // 10
origin.a // undefined
handler.has()
handler.get()
handler.set()
handler.deleteProperty()
handler.ownKeys()
handler.apply()
handler.construct()

const target = {name: 'vuejs'}
const {proxy,revoke} = Proxy.revocable(target,{})
proxy.name
revoke()
proxy.name

// 验证器
const target1 = {
    _id : '1024',
    name: 'vuejs'
}
const validator1 = {
    name(val) {
        return typeof val === 'string'
    },
    _id(val) {
        return typeof val == 'number' && val > 1024
    }
}

const createValidator = (target,validator1) => {
    return new Proxy(target,{
        // _validator: validator,
        set(target,propKey,value,receiver) {
            let validator = validator1[propKey](value)
            if (validator) {
                return Reflect.set(target,propKey,value,receiver)
            } else {
                throw new Error(`Cannot set ${String(propKey)} to ${value}. Invalid type.`)
            }
        }
    })
}

// 私有属性
const target2 = {
    _id: '1024',
    name: 'vuejs'
}
const proxy2 = new Proxy(target, {
    get(target,propKey,proxy1) {
        if (propKey[0] === '_') {
            throw Error(`${String(propKey)} is restricted`)
        }
        return Reflect.get(target,propKey,proxy1)
    },
    set(target,propKey,value,receiver) {
        if (propKey[0] === '_') {
            throw Error(`${String(propKey)} is restricted`)
        }
        return Reflect.set(target,propKey,value,receiver)
    }
})


