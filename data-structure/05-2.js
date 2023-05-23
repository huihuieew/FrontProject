// 递归处理数组 一次递归调用
// 递归处理链表 一次递归调用
// 递归处理二叉树 两次递归调用

// 公司组织树
// 员工id，重要度weight，下属ids
// 求员工及下属组成的团队的重要度之和 只有一个直属领导
const employees = [
    { id: 1, importance: 5, children: [2, 3] },
    { id: 2, importance: 3, children: [3] },
    { id: 3, importance: 1, children: [] },
]
let map = null;
let res = 0
function getImportance(employees, id) {
    map = getMap(employees)
    // preOrder(id)
    // return res
    return postOrder(id)
}
function getMap(users) {
    let map = {}
    for (let user of users) {
        map[user.id] = user
    }
    return map
}
function preOrder(id) {
    let user = map[id]
    if (user == null) return;
    // 执行根任务
    // 根任务将任务结果放入结果容器中
    res += user.importance
    for (let child of user.children) {
        // 多次调用 多叉树
        // 子任务 将任务结果放入结果容器中
        // 递归调用 完成子任务
        preOrder(child)
    }
}
// 根任务 子任务 结果容器 返回完整的结果
function postOrder(id) {
    let user = map[id]
    if (user == null) return 0;
    let total = 0
    for (let child of user.children) {
        // 多次调用 多叉树
        // 执行子任务
        // 子任务把任务结果放入结果容器中
        total += postOrder(child)
    }
    // 根任务 把任务结果放入结果容器中
    // 返回完整的任务结果
    return total + user.importance
}





