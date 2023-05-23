// 策略模式
// 定义一系列的算法，封装起来，互相替换
// 环境类 策略类
// js 算法被封装在函数中，函数作为一等对象四处传递，策略模式已融入语言本身
let strategies = { // 策略类
    s(salary) {
        return salary * 4
    },
    a(salary) {
        return salary * 3
    },
    b(salary) {
        return salary * 2
    },
}
let calculateBonus = function (level, salary) { // context 环境类
    return strategies[level](salary)
}
calculateBonus('s', 20000)
calculateBonus('a', 10000)

// 让小球动起来
let tween = {
    linear(t, b, c, d) {
        return c * t / d + b
    },
    easeIn(t, b, c, d) {
        return c * (t /= d) * t + b
    }
}
let animation = function (dom) {
    this.dom = dom
    this.startTime = 0
    this.startPos = 0
    this.endPos = 0
    this.propertyName = null
    this.easing = null
    this.duration = null
}

// 表单校验
let strategies1 = {
    isNonEmpty(value, errormsg) {
        if (value === '') return errormsg;
    },
    minLength(value, length, errormsg) {
        if (value.length < length) return errormsg;
    }
}
let validataFn = function () {
    let validator = new Validator()
    validator.add(registerForm.username, 'isNonEmpty', '用户名不能为空')
    validator.add(registerForm.password, 'minLength', '密码长度不能小于6')
    let errormsg = validator.start()
    return errormsg
}
let registerForm = document.getElementById('registerForm')
registerForm?.onsubmit = function () {
    let errormsg = validataFn()
    if (!errormsg) return true;
    alert(errormsg)
    return false;
}
let Validator = function () {
    this.cache = []
}
Validator.prototype.add = function (dom, rule, errormsg) {
    let ary = [rule]
    this.cache.push(function () {
        let strategy = ary.shift()
        ary.unshift(dom.value)
        ary.push(errormsg)
        return strategies1[strategy].apply(dom, ary)
    })
}
Validator.prototype.start = function () {
    for (let item of this.cache) {
        let msg = item()
        if (msg) return msg;
    }
}

Validator.prototype.add = function (dom, rules) {
    for (let rule of rules) {
        let ary = [rule.strategy]
        this.cache.push(function () {
            let strategy = ary.shift()
            ary.unshift(dom.value)
            ary.push(rule.errormsg)
            return strategies1[strategy].apply(dom, ary)
        })
    }
}






























