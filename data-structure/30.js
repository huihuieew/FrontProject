// 非线性结构
// 存储方式 数组 链表 哈希表 队列 栈递归调用

// 二叉树的创建和遍历
// 非线性结构  利用递归进行遍历
// 深度优先算法dfs 前序遍历 中序遍历 后序遍历    回溯思想

// 二叉树的非递归遍历
// 深度优先-栈  广度优先-队列

class BiTreeNode {
    constructor(ele) {
        this.data = ele
        this.left = null
        this.right = null
    }
}

class BiTree {
    root
    constructor() {
        this.root = this.createTree()
    }
    createTree() {
        let node = new BiTree('a')
        node.left = new BiTree('b')
        node.right = new BiTree('c')
        node.left.left = new BiTree('d')
        node.left.left.left = new BiTree('g')
        node.left.left.right = new BiTree('h')
        node.right.left = new BiTree('e')
        node.right.right = new BiTree('f')
        node.right.left.right = new BiTree('i')
        return node
    }
}
let mytree = new BiTree()
mytree.createTree()
mytree.root






























