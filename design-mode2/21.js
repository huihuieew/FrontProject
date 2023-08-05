// 策略模式

// js
// 1.商品打折
const strategies = {
    regularCard(deposit) {
        return deposit * 0.1
    },
    goldCard(deposit) {
        return deposit * 0.2
    },
    platinumCard(deposit) {
        return deposit * 0.3
    }
}
const calculate = (vl, deposite) => {
    return strategies[vl](deposite)
}
console.log('platinumCard,1000', calculate('platinumCard', 1000));