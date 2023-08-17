const path = require('path');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');

// 添加打包入口文件夹 packages 手动
const entryDir = path.resolve(__dirname, '../src/components');
// 添加出口文件夹 lib 自动
const outDir = path.resolve(__dirname, '../lib');

// vite配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [vue()]
})

// rollup配置
const rollupOptions = {
    // 这两个库不需要打包
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

// 全量构建
const buildAll = async () => {
    await build(defineConfig({
        ...baseConfig,
        build: {
            rollupOptions,
            lib: {
                entry: path.resolve(entryDir, 'index.ts'),
                //组件库名字
                name: 'my-components-base',
                fileName: 'my-components-base1',
                // 输出格式
                formats: ['es', 'umd']
            }
        },
        outDir
    }))
}

const buildLib = async () => {
    await buildAll()
}

buildLib()