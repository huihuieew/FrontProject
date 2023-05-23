// 装饰器模式
// 阮一峰书中介绍示例 js装饰器使用

class Superman {
    superman
    constructor(man) {
        this.superman = man
    }
    say() {
        this.superman.say()
        console.log('now, i am superman');
        
    }
}

class Person {
    person
    constructor() {
        this.person = {}
    }
    say() {
        console.log('I am man');
    }
}

const man = new Person()
man.say()
const superman = new Superman(man)
superman.say()

// 装饰类/类属性/类方法
// @frozen 类装饰器
// class Foo {
//     @configurable(false) 方法装饰器
//     @enumerable(true) 方法装饰器
//     method() {}

//     @throttle(500)
//     expensiveMethod() {}
// }

@testable(true)
class MyTestableClass {}
@testable(false)
class MyTestableClass1 {}
function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable
    }
}
console.log(MyTestableClass.isTestable);
@testable2
class MyTestableClass2 {}
function testable2(target) {
    target.prototype.isTestable = true
}

function mixins(...list) {
    return function(target) {
        Object.assign(target.prototype,...list)
    }
}
const Foo = {
    foo() {
        console.log('foo');
    }
}
@mixins(Foo)
class MyClass {}
let obj = new MyClass()
obj.foo()
const Foo1 = {
    foo() {console.log('foo1');}
}
class MyClass1 {}
Object.assign(MyClass1.prototype,Foo1)
let obj1 = new MyClass1()
obj1.foo()
// @decorator
// class A {}
// // equal to 
// class A {}
// A = decorator(A) || A

class MyReactComponent extends React.Component {}
export default connect(mapStateToProps,mapDispatchToProps)(MyReactComponent)
// 改写
@connect(mapStateToProps,mapDispatchToProps)
export default class MyReactComponent extends React.Component {}


// 方法装饰器
class C {
    @trace 
    toString() {
        return 'C'
    }
}
// equal to
C.prototype.toString = trace(C.prototype.toString)

function replaceMethod() {
    return function() {
        return `How are you, ${this.name}`
    }
}
class Person3 {
    name
    constructor(name) {
        this.name = name
    }
    @replaceMethod
    hello() {
        return `Hi ${this.name}`
    }
}
const robin = new Person('Robin')
robin.hello() 'how are you, robin'

class Person4 {
    first
    last
    @readonly
    name() {
        return `${this.first} - ${this.last}`
    }
}
function readonly(target,name,descriptor) {
    descriptor.writable = false
    return descriptor
}
// equal to
Object.defineProperty(Person4.prototype,'name',{
    writable: false
})

class Person5 {
    children
    @nonenumerable
    get kidCount() {
        return this.children.length
    }
}
function nonenumerable(target,name,descriptor) {
    descriptor.enumerable = false
    return descriptor
}

class Math1 {
    @log
    add(a,b) {
        return a + b
    }
}
function log(target,name,descriptor) {
    let oldVal = descriptor.value
    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldVal.apply(this,arguments)
    }
    return descriptor
}
let m = new Math1()
console.log(m.add(2,4));

// 装饰器有注释作用
@testable
class Person6 {
    first
    last
    @readonly
    @nonenumerable
    name() {
        return `${this.first} . ${this.last}`
    }
}

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css'
})
class MyComponent {
    @Prop() first: string;
    @Prop()  last: string
    @State() isVisible:boolean = true

    render() {
        return (
            <p>Hello, my name is {this.first} {this.last}</p>
        )
    }
}

function dec(id) {
    console.log('evaluated',id);
    return (target,property,descriptor) => console.log('executed',id);
}
class Example {
    @dec(1)
    @dec(2)
    method() {}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1