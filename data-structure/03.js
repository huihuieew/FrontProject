// 递归处理非线性结构 二叉树 多叉树 图

// 树形结构  公司组织人员树 多叉树

// 二叉树遍历
// 子问题 左子树 根节点 右子树
// 最小结果 null
function printTreePre(root) {
    // 退出条件
    if (root) return;
    // 执行任务
    console.log('root', root.value); // 先序遍历   other 后序遍历 中序遍历 根节点为依据
    // 递归调用
    printTreePre(root.left)
    printTreePre(root.right)
}
function inOrder(root) { // 中序遍历
    // 退出条件
    if (root) return;
    // 执行任务
    // 递归调用
    inOrder(root.left)
    console.log('root', root.value);
    // 递归调用
    inOrder(root.right)
}
function postOrder(root) {
    // 退出条件
    if (root) return;
    // 递归调用
    postOrder(root.left) // 子问题
    postOrder(root.right) // 子问题
    // 执行任务
    console.log('root', root.value);
}



