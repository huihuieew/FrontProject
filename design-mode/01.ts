// 策略模式

let calculateBonus = (vl,deposit) => {
    if (vl == 'regular') {
        return deposit * 0.1
    }
    if (vl == 'gold') {
        return deposit * 0.2
    }
    if (vl == 'platinum') {
        return deposit * 0.3
    }
}
const log = (vl,deposit) => {
    console.log(calculateBonus(vl,deposit))
}
log('regular',500);
log('gold',500);
log('platinum',500);

// 策略类
class RegularCard {
    calculate(deposit) {
        return deposit * 0.1 
    }
}
class GoldCard { 
    calculate(deposit) {
        return deposit * 0.2
    }
}
class PlatinumCard {
    calculate(deposit) {
        return deposit * 0.3
    }
}
// 奖金类
class Bonus {
    deposit
    strategy
    constructor() {
        this.deposit = null
        this.strategy = null
    }
    setSalary(deposit) {
        this.deposit = deposit
    }
    setStrategy(startegy) {
        this.strategy = startegy
    }
    getBonus() {
        return this.strategy.calculate(this.deposit)
    }
}
let bonus = new Bonus()
bonus.setSalary(2000)
bonus.setStrategy(new GoldCard)
console.log(bonus.getBonus())

// 基于js函数的策略类
const strategies = {
    RegularCard(deposit) {
       return (deposit * 0.1)
    },
    GoldCard(deposit) {
        return (deposit * 0.2)
     },
     PlatinumCard(deposit) {
        return (deposit * 0.3)
     },
}
// 奖金类，对应环境类，是环境类抽象 具象业务类
const calculate = (vl,deposite) => {
    return strategies[vl](deposite)
}
console.log(calculate('PlatinumCard',1000));

