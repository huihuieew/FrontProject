// 递归处理多叉树 公司组织树 node
function preOrder(node) {
    if (node == null) return;
    console.log('node', node.value);
    for (let child of node.children) {
        preOrder(child);
    }
}
function postOrder(node) {
    if (node == null) return;
    for (let child of node.children) {
        postOrder(child)
    }
    console.log('node', node.value);
}

// 2.员工重要性
const employees = [
    { id: 1, importance: 5, children: [2, 3] },
    { id: 2, importance: 3, children: [3] },
    { id: 3, importance: 2, children: [] },
]
let map;
function getImportance(employees, id) {
    map = getMap(employees);
    return postOrder2(id)
}
function getMap(employees) {
    let map = {}
    employees.map(item => {
        map[item.id] = item;
    })
    return map;
}
function postOrder2(id) {
    let employee = map[id];
    if (employee == null) return;
    let total = 0;
    for (let child of employee.children) {
        total += postOrder2(child)
    }
    return total + employee.importance;
}
let res = 0;
let map1;
let set = new Set()
function getImportance2(employees, id) {
    map1 = getMap(employees);
    preOrder2(id);
    return res;
}
function preOrder2(id) {
    let employee = map1[id];
    if (employee == null) return;
    if (set.has(id)) return;
    set.add(id)
    res += employee.importance;
    for (let child of employee.children) {
        preOrder2(child);
    }
}
console.log('importance', getImportance2(employees, 1));