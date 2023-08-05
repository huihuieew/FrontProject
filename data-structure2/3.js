// 二叉树遍历
// 左子树 根节点 右子树
// 深度优先遍历  先序遍历 后序遍历 中序遍历
// 广度优先算法 基于队列
// 最小结果 

function printTreePre(root) { // 先序遍历
    if (root) return;
    console.log('root', root.value);
    printTreePre(root.left);
    printTreePre(root.right);
}

function printInOrder(root) {
    if (root) return;
    printInOrder(root.left);
    console.log('root', root.value);
    printInOrder(root.right);
}
// 两次递归调用，二叉树
function printPostOrder(root) {
    if (root) return;
    printPostOrder(root.left);
    printPostOrder(root.right);
    console.log('root', root.value);
}













