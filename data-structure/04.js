// 深度优先搜索算法 DFS   前序遍历 中序遍历 后续遍历
// 广度优先搜索算法 BFS   队列 基于队列的BFS

// DFS 解决遍历问题 二叉树98%的问题是遍历问题
// 98%的二叉树问题，二叉树的遍历问题
// 求二叉树的深度  后序遍历
function deepTree(root, depth = 1) { // 前序遍历
    // 退出条件
    if (root == null) return;
    // 执行任务
    res = Math.max(res, depth)
    // 递归调用
    deepTree(root.left, depth + 1)  // 子问题
    deepTree(root.right, depth + 1) // 子问题
}
let res = 0
function maxDeep(treeNode) {
    res = 0
    deepTree(treeNode)
    return res
}

function postOrder(node) { // 后序遍历
    // 退出条件
    if (node == null) return 0; // 最小子问题
    // 递归调用
    let leftMaxDepth = postOrder(node.left)  // 遍历左子树
    let rightMaxDepth = postOrder(node.right) // 遍历右子树
    // 执行任务
    return Math.max(leftMaxDepth, rightMaxDepth) + 1
}
function maxDeep2(treeNode) {
    return postOrder(treeNode)
}









