// 图论    graph
// 与树结构相似的数据结构
// 节点Vertex 边Edge 相邻节点
// 度 路径

// 图的表示 
// 邻接矩阵（二维数组） 稀疏矩阵，浪费空间
// 邻接表（数组/链表/哈希表） 

class Dictionary {
    constructor() {
        this.items = {}
    }
    set(key, val) {
        this.items[key] = val
    }
    has(key) {
        return this.items.hasOwnProperty(key)
    }
    remove(key) {
        if (!this.has(key)) return false;
        delete this.items[key]
        return true
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }
    keys() {
        return Object.keys(this.items)
    }
    size() {
        return this.keys().length
    }
    clear() {
        this.items = {}
    }
}

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(ele) {
        this.items.push(ele)
    }
    dequeue() {
        return this.items.shift()
    }
    front() {
        return this.items[0]
    }
    isEmpty() {
        return this.items.length == 0
    }
    size() {
        return this.items.length
    }
    toString() {
        return this.items.join(' -> ')
    }
}
let q = new Queue()
q.enqueue(1)
q.enqueue(2)
console.log(q.toString());

class Graph {
    constructor() {
        this.vertexes = []
        this.edges = new Dictionary() // 邻接表方式表示边
    }
    addVertex(v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    }
    addEdge(v1, v2) {
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    }
    toString() {
        let s = ''
        // for (let v of this.vertexes) {
        //     s += '\n'
        //     let es = this.edges.get(v)
        //     s += `${v} -> `
        //     for (let e of es) {
        //         s += ` ${e}`
        //     }
        // }
        this.vertexes.map(v => {
            s += `\n${v} -> `
            // this.edges.get(v).map(e => {
            //     s += `${e} `
            // })
            s += this.edges.get(v).join(' ')
        })
        return s
    }
    // 图的遍历
    // 广度优先bfs 队列存储方式
    // 深度优先算法dfs 栈存储方式
    // white grey black 未被访问 未访问所有 全部访问过
    initializeColor() { // 将所有节点初始化为白色
        let colors = {}
        this.vertexes.map(v => {
            colors[v] = 'white'
        })
        return colors
    }
    bfs(initV) { // 队列存储方式
        let s = ''
        let queue = new Queue()
        queue.enqueue(initV)
        let colors = this.initializeColor()
        while (!queue.isEmpty()) {
            let v = queue.dequeue()
            let vNs = this.edges.get(v)
            colors[v] = 'grey'
            vNs.map(v => {
                if (colors[v] === 'white') {
                    queue.enqueue(v)
                    colors[v] = 'grey'
                }
            })
            s += `${v} - `
            colors[v] = 'black'
        }
        return s
    }
    dfs(initV) { // 函数栈 存储方式  递归方式
        let colors = this.initializeColor()
        // 调用搜索函数
        // let s = ''
        // s = this.dfsVisit(initV, colors, s)
        // return s
        return this.dfsVisit1(initV, colors)
    }
    dfsVisit(initV, colors, res) {
        colors[initV] = 'grey'
        // 先序遍历 
        // 根任务 把根任务结果放入
        res += `-${initV}`
        let vNs = this.edges.get(initV)
        vNs.map(v => {
            if (colors[v] === 'white') {
                // 子任务再把完整结果返回
                res = this.dfsVisit(v, colors, res)
            }
        })
        colors[initV] = 'black'
        // 返回完整的任务结果
        return res
    }
    // 根任务 子任务 任务结果容器 是否返回完整的任务结果
    dfsVisit1(initV, colors) {
        colors[initV] = 'grey'
        // 结果容器
        let res = ''
        let vNs = this.edges.get(initV)
        vNs.map(v => {
            if (colors[v] === 'white') {
                // 子任务 把子任务结果先放入结果容器
                res += this.dfsVisit1(v, colors)
            }
        })
        colors[initV] = 'black'
        // 再把根任务结果放入
        // 然后返回完整的任务结果
        return res + `-${initV}`
    }
}
// 创建图结构
let graph = new Graph()
// 添加顶点
let myVertexes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
myVertexes.map(v => graph.addVertex(v))
// 添加边
graph.addEdge('a', 'b')
graph.addEdge('a', 'c')
graph.addEdge('a', 'd')
graph.addEdge('c', 'd')
graph.addEdge('c', 'g')
graph.addEdge('d', 'g')
graph.addEdge('d', 'h')
graph.addEdge('b', 'e')
graph.addEdge('b', 'f')
graph.addEdge('e', 'i')
// bfs广度优先搜索
console.log('bfs', graph.bfs('a'));
console.log('dfs', graph.dfs('a'));

// class Graph {
//     constructor() {
//         // 图的节点存储方式 数组
//         this.vertexes = []
//         // 图的边存储方式 字典
//         this.edges = new Dictionary()
//     }
//     addVertex(v) { }
//     addEdge(v1, v2) { }
//     toString() { }
//     // 图遍历 防止重复遍历
//     initializeColor() { }
//     // 广度优先遍历 以队列为存储方式
//     bfs(initV) { }
//     // 深度优先遍历 以函数栈为存储方式
//     dfs(initV) { }
//     // 递归调用
//     dfsVisit(initV, colors, res) { }
// }





































