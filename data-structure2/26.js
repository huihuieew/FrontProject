// 非线性数据结构
// 二叉树的创建/遍历
// 递归遍历   深度优先遍历dfs 前序/中序/后序遍历 回溯思想
// 非递归遍历 深度优先遍历stack 广度优先遍历queue

function biTree() {
    return {
        root: null,
        createTree() {
            let biTreeNode = (ele) => ({
                value: ele,
                left: null,
                right: null,
            });
            let node1 = biTreeNode('a');
            let node2 = biTreeNode('b');
            let node3 = biTreeNode('c');
            let node4 = biTreeNode('d');
            let node5 = biTreeNode('e');
            let node6 = biTreeNode('f');
            let node7 = biTreeNode('g');
            let node8 = biTreeNode('h');
            let node9 = biTreeNode('i');
            node1.left = node2
            node1.right = node3
            node2.left = node4
            node2.right = node3
            node3.left = node5
            node3.right = node6
            node4.left = node7
            node4.right = node8
            node5.right = node9
            return this.root = node1;
        }
    }
}
let tree = biTree();
console.log('tree', tree.createTree());