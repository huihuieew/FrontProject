// 递归处理数组 一次递归调用
// 递归处理链表 一次递归调用
// 递归处理二叉树 两次递归调用

// 递归处理多叉树 公司组织树 node
// 没有中序遍历
function preOrder(node) {
    // 退出条件
    if (node == null) return; // 最小子问题
    // 执行任务
    console.log('node', node.value);
    // 多次递归调用
    for (let child of node.children) {
        preOrder(child)
    }
}

function postOrder(node) {
    // 退出条件
    if (node == null) return;
    // 多次递归调用
    for (let child of node.children) {
        postOrder(child)
    }
    // 执行任务
    console.log('node', node.value);

}

// 从具体场景中抽象出对应的数据结构
// 员工id，重要度weight，下属ids
// [1,15,[2]] [2,10,[3]] [3,5,[]] --- id,value,children
// 求员工及下属组成的团队的重要度之和 只有一个直属领导
// const employees = [[1, 5, [2, 3]], [2, 3, [3]], [3, 3, []]]
const employees = [
    { id: 1, importance: 5, children: [2, 3] },
    { id: 2, importance: 3, children: [3] },
    { id: 3, importance: 1, children: [] },
]
let map = null;
let res = 0
function getImportance(employees, id) {
    map = getMap(employees)
    // preOrder(id);
    // return res;
    return postOrder(id)
}
function getMap(employees) {
    let map = {}
    employees.map(item => {
        map[item.id] = item
    })
    return map
}
function preOrder(id) {
    let employee = map[id]
    // 退出条件 最小子问题
    if (employee == null) return;
    // 执行任务
    res += employee.importance
    // 多次递归调用 子问题
    for (let child of employee.children) {
        preOrder(child)
    }
}
function postOrder(id) {
    let employee = map[id]
    if (employee == null) return 0;

    // 多次递归调用
    let total = 0
    for (let child of employee.children) {
        total += postOrder(child) // 子问题
    }

    return total + employee.importance
}





