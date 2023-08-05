// 98%的二叉树问题，是二叉树遍历
// 1.求树的深度
function deepTree(root, depth = 1) {
    if (root == null) return;
    res = Math.max(res, depth);
    deepTree(root.left, depth + 1)
    deepTree(root.right, depth + 1)
}
let res = 0
function maxDeep(treeNode) {
    deepTree(treeNode)
}

function postOrder(node) {
    if (node == null) return 0;
    let leftMaxDepth = postOrder(node.left);
    let rightMaxDepth = postOrder(node.right);
    return Math.max(leftMaxDepth, rightMaxDepth)
}
function maxDeep2(treeNode) {
    return postOrder(treeNode);
}