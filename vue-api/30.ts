// vue3
import Vue from 'vue'
// createApp
const HelloVueApp = {
    data() {
        return {
            message: 'hello vue'
        }
    }
}
Vue.createApp(HelloVueApp).mount('#hello-vue')

export const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args)

    if (__DEV__) {
        injectNativeTagCheck(app)
    }

    const { mount } = app
    app.mount = (containerOrSelector: Element | string): any => {
        const container = normalizeContainer(containerOrSelector)
        if (!container) return;
        const component = app._component
        if (!isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML
        }
        container.innerHTML = ''
        const proxy = mount(container)
        container.removeAttribute('v-cloak')
        return proxy;
    }
    return app
}) as CreateAppFunction<Element>

// ensureRenderer
const rendererOptions = {
    patchProp, // 处理props属性
    ...nodeOps // 处理DOM节点操作
}
let renderer: Renderer | HydrationRenderer
let enableHydration = false
function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions))
}
// createRenderer
export function createRenderer<
    HostNode = RendererNode,
    HostElement = RendererElement
>(options: RendererOptions<HostNode, HostElement>) {
    return baseCreateRenderer<HostNode, HostElement>(options)
}
// baseCreateRender   vnode diff patch
function baseCreateRenderer(options, createHydrationFns): any {
    // ...
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, dydrate)
    }
}
export function createAppAPI<HostElement>(
    render: RootRenderFunction,
    hydrate?: RootHydrateFunction
): CreateAppFunction<HostElement> {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps !== null && !isObject(rootProps)) {
            __DEV__ && warn(`root props`)
            rootProps = null
        }
        // 创建默认app配置
        const context = createAppContext()
        const installedPlugins = new Set()

        let isMounted = false

        const app: App = {
            _component: rootComponent as Component,
            _props: rootProps,
            _container: null,
            _context: context

            get config() {
                return context.config
            }
            set config(v) {
                if (__DEV__) {
                    warn('app.config ')
                }
            }
            use() { },
            mixin() { },
            component() { },
            directive() { },
            mount() { },
            unmount() { },
        }
        return app
    }
}
// createAppContext实现
export function createAppContext(): AppContext {
    return {
        config: {
            isNavtiveTag: NO,
            devtools: true,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            isCustomElement: NO,
            errorHandler: undefined,
            warnHandler: undefined,
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null)
    }
}







































