// 策略模式
// 环境类 策略类

// 1.薪资
let strategies = {  // 策略类
    b(salary) {
        return salary * 2
    },
    a(salary) {
        return salary * 3
    },
    s(salary) {
        return salary * 4
    },
}
let calculateBonus = function (level, salary) {  // 环境类
    return strategies[level](salary)
}
calculateBonus('b', 20000)
calculateBonus('s', 20000)

// 2.让小球动起来

// 3.表单校验
let strategies2 = {
    isNonEmpty(value, errormsg) {
        if (value === '') return errormsg;
    },
    minLength(value, length, errormsg) {
        if (value.length < length) return errormsg;
    }
}
let Validator = function () {
    this.cache = []
}
Validator.prototype.add = function (dom, rule, errormsg) {
    let arr = [rule]
    this.cache.push(function () {
        let strategy = arr.shift();
        arr.unshift(dom.value);
        arr.push(errormsg);
        return strategies2[strategy].apply(dom, arr)
    })
}
Validator.prototype.start = function () {
    for (let item of this.cache) {
        let msg = item()
        if (msg) return msg;
    }
}
let validateFn = function () {
    let validator = new Validator();
    validator.add(registerForm.username, 'isNonEmpty', '用户名不能为空');
    validator.add(registerForm.password, 'minLength', '密码长度不能小于6位');
    let errormsg = validator.start()
    return errormsg
}
let registerForm = document.getElementById('registerForm');
registerForm.onsubmit = function () {
    let errormsg = validateFn()
    if (!errormsg) return true;
    console.log('errormsg', errormsg);
    return false;
}











