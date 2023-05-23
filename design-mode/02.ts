// 发布-订阅模式
// 观察者模式

class Subject {
    count
    observers
    constructor(count) {
        this.count = count
        this.observers = []
    }
    getCount() {
        return this.count
    }
    setCount(val) {
        this.notify(val)
        this.count = val
    }
    notify(val) {
        this.observers.forEach(o => o.update(val))
    }
    push(o) {
        this.observers.push(o)
    }
}
class Observers {
    subject
    constructor(subject) {
        this.subject = subject
        this.subject.push(this)
    }
    update(val) {
        console.log('count chage', val);

    }
}

let sub = new Subject(1)
let o = new Observers(sub)
let o2 = new Observers(sub)
sub.setCount(5)

// const t_strategy = new Map([
//     [true, (name,fn) => {
//         this.cache[name].push(fn)
//     }],
//     [false, (name,fn) => {
//         this.cache[name] = [fn]
//     }]
// ])
const t_strategy = {
    exist(name,fn) {
        this.cache[name].push(fn)
    },
    none(name,fn) {
        this.cache[name] = [fn]
    }
}
class EventEmitter {
    cache
    constructor() {
        this.cache = {}
    }
    on(name, fn) {
        // const tasks = this.cache[name]
        // if (tasks) {
        //     this.cache[name].push(fn)
        // } else {
        //     this.cache[name] = [fn]
        // }
        // t_strategy.get(!!tasks)(name,fn)
        let t = this.cache[name] ? 'exist' : 'none'
        t_strategy[t](name,fn)
    }
    off(name, fn) {
        const tasks = this.cache[name]
        if (!tasks) return null;
        const index = this.cache[name].findIndex(item => item === fn)
        index >= 0 && this.cache[name].splice(index, 1)
    }
    emit(name, ...args) {
        const tasks = this.cache[name].slice()
        if (tasks) {
            for(let fn of tasks) {
                fn(...args)
            }
        }
    }
}
const handleChange = (val) => {
    console.log('change val',val);
}
const val = 'val'
const eventBus = new EventEmitter()
// 组件一
eventBus.on('change',handleChange)
// 组件二
eventBus.emit('change',val)


