// 自定义渲染
import { createRenderer } from '@vue/runtime-core'

const { render, createApp } = createRenderer({
    patchProp,
    insert,
    remove,
    createElement,
    // ...
})
// `render` 是底层api
// `createApp` 返回一个应用实例
export { render, createApp }

// 重新导出Vue的核心API
export * from '@vue/runtime-core'