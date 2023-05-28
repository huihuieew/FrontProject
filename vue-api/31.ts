// defineComponent

import { defineComponent } from 'vue'

const MyComponent = defineComponent({
    data() {
        return { count: 1 }
    },
    methods: {
        increment() {
            this.count++
        }
    }
})
console.log('component', MyComponent)
// test1














































