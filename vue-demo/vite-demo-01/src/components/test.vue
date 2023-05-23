<template>
    <div>
        test
    </div>
</template>

<script setup lang="ts">
let mult = function () {
    let a = 1
    for (let i in arguments) {
        a *= arguments[i]
    }
    return a
}
let proxymult = function (fn) {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')
        if (cache[args]) return cache[args];
        return cache[args] = fn.apply(this, arguments)
    }
}

let cachemult = proxymult(mult)
// alert(cachemult(1, 23, 4))
</script>