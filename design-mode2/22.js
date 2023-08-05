// 发布-订阅模式
// 观察者模式

let subject = function (count) {
    return {
        count,
        observers: [],
        setCount(count) {
            this.notify(count)
            this.count = count
        },
        notify(val) {
            this.observers.map(o => o.update(val))
        },
        push(o) {
            this.observers.push(o)
        }
    }
}
let observers = function (subject) {
    let o = {
        update(val) {
            console.log('count change', val);
        }
    }
    subject.push(o)
    return o
}
let sub = subject(1)
let ob1 = observers(sub)
let ob2 = observers(sub)
sub.setCount(5)
