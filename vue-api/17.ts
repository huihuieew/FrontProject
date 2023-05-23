// 服务端渲染 ssr
// renderToString() renderToNodeStream() renderToWebStream() renderToSimpleStream()
// pipeToNodeWritable() pipeToWebWritable() useSSRContext()

import { createSSRApp } from 'vue'
import { renderToString, renderToNodeStream, pipeToNodeWritable, renderToSimpleStream, renderToWebStream, pipeToWebWritable } from 'vue/server-render'

const app = createSSRApp({
    data: () => ({ msg: 'hello' }),
    template: `<div>{{msg}}</div>`
});

(async () => {
    const html = await renderToString(app)
    console.log('html', html);
})()

const ctx = {}
const html1 = await renderToString(app, ctx)
console.log(ctx.teleports); // { '#teleported':'teleported content' }

// 在一个node.js http 处理函数内
// 将输入渲染为一个node.js Readable stream实例
const res = ''
renderToNodeStream(app).pipe(res)
// 将输入渲染并pipe到一个node.js Writable stream实例
// 在一个node.js http 处理函数内
pipeToNodeWritable(app, {}, res)

// 将输入渲染为一个web ReadableStream实例
// 在一个支持ReadableStream的环境下
// return new Response(renderToWebStream(app))
// 将输入渲染并pipe到一个web WritableStream实例
const { readable, writable } = new TransformStream()
pipeToWebWritable(app, {}, writable)
// return new Response(readable)

// 将输入以stream模式进行渲染
let ress = ''
renderToSimpleStream(
    app,
    {},
    {
        push(chunk) {
            if (chunk === null) {
                // done
                console.log(`render complete: ${ress}`)
            } else {
                ress += chunk
            }
        },
        destory(err) {
            // error encountered
        }
    }
)

import { useSSRContext } from 'vue'
// 确保只在服务端渲染时调用
if (import.meta.env.SSR) {
    const ctx = useSSRContext()
    // ...给上下文对象添加属性
}













