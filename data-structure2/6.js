// 图结构 相邻节点
// 员工有多个下属 下属有多个上级

let graph = {
    1: {
        value: 1,
        adjacents: [2, 5]
    },
    2: {
        value: 2,
        adjacents: [3, 4]
    },
    3: {
        value: 3,
        adjacents: []
    },
    4: {
        value: 4,
        adjacents: []
    },
    5: {
        value: 5,
        adjacents: [4]
    },
}
const node = {
    value: 1,
    adjacents: [2, 5]
}
const set = new Set();
function preOrder(node) {
    if (!node) return;
    if (set.has(node.value)) return;
    console.log('node', node.value);
    set.add(node.value);
    for (let child of node.adjacents) {
        preOrder(graph[child]);
    }
}
preOrder(node);