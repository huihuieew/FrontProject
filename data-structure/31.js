// 树
// 树 节点 根节点 叶子节点 子节点 父节点
// 度 深度 路径 路径长度
// 数组   访问快/查找慢/插入删除位移操作效率低
// 链表   插入删除效率高/查找慢
// 哈希表 插入删除查找效率高/无序/比较慢/空间利用率不高
// 树结构 有序/查找效率高/空间利用率高/比较最大最小值快
// 树的非线性结构 可以表示一对多的关系 文件目录 组织树
// 每种数据结构 都有特定的应用场景

// 线性结构   遍历 迭代
// 非线性结构 遍历 递归

// 树
// 儿子-兄弟表示法 每个节点引用数为2
class Node {
    constructor(ele, left, right) {
        // 存储数据
        this.data = ele
        // 左边的子节点
        this.leftChild = left
        // 右侧兄弟节点
        this.rightSibling = right
    }
}
let a = new Node('a', b, null)
let b = new Node('b', e, c)
let f = new Node('f', null, null)
// 儿子-兄弟表示法 + 旋转  二叉树

// 二叉树
// 第i层 2（i-1） 深度k 2^k-1  n0=n2+1  n0叶子节点 n2度为2根节点个数

// 完全二叉树 满二叉树
// 二叉树的存储 数组/链表
// 数组，存储完全二叉树
// 链表，最常见的二叉树存储方式

// 数组  栈/队列/优先队列/哈希表
// 链表  树/优先队列/图

// 二叉搜索树
// 较小值在左节点，较大值在右节点，查询效率高
class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
// 二叉搜索树常用操作
// insert(key) search(key) 
// inOrderTraverse preOrderTraverse postOrderTraverse
// min max remove(key)
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(key) {
        let newnode = new Node(key)

        if (this.root == null) {
            this.root = newnode
        } else {
            this.insertNode(this.root, newnode)
        }
    }
    insertNode(node, newnode) {
        if (newnode.key === node.key) return;
        if (newnode.key < node.key) {
            if (node.left == null) {
                node.left = newnode
            } else {
                this.insertNode(node.left, newnode)
            }
        } else {
            if (node.right === null) {
                node.right = newnode
            } else {
                this.insertNode(node.right, newnode)
            }
        }
    }
    max() {
        let node = this.root
        while (node.right !== null) {
            node = node.right
        }
        return node.key
    }
    min() {
        let node = this.root
        while (node.left !== null) {
            node = node.left
        }
        return node.key
    }
    search(key) {
        let node = this.root
        while (node !== null) {
            if (key < node.key) {
                node = node.left
            } else if (key > node.key) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }
    remove(key) {
        let current = this.root
        let parent = null
        let isLeftChild = null
        while (current.key !== key) {
            if (key < current.key) {
                isLeftChild = true
                parent = current
                current = current.left
            } else {
                isLeftChild = false
                parent = current
                current = current.right
            }
            if (current === null) return false
        }

        if (current.left == null && current.right == null) {
            if (current === this.root) {
                this.root = null
            } else {
                if (isLeftChild) {
                    parent.left = null
                } else {
                    parent.right = null
                }
            }
        } else if (current.right === null) {
            if (current == this.root) {
                this.root = current.left
            } else {
                if (isLeftChild) {
                    parent.left = current.left
                } else {
                    parent.right = current.left
                }
            }
        } else if (current.left == null) {
            if (current === this.root) {
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        } else {
            let successor = this.getSuccessor(current)
            if (current == this.root) {
                this.root = successor
            } else if (isLeftChild) {
                parent.left = successor
            } else {
                parent.right = successor
            }
        }
    }
    getSuccessor(node) {
        let successor = node
        let current = node.right
        let successorParent = node

        while (current !== null) {
            successorParent = successor
            successor = current
            current = current.left
        }
        successor.left = node.left
        if (successor !== node.right) {
            successorParent.left = successor.right
            successor.right = node.right
        }
        return successor
    }
    preOrderTraversal() {
        let s = ''
        s = this.preOrderTraversalNode(this.root, s)
        return s
    }
    preOrderTraversalNode(node, s) {
        if (node != null) {
            s += node.key + '->'
            console.log('s', s);
            s = this.preOrderTraversalNode(node.left, s)
            s = this.preOrderTraversalNode(node.right, s)
        }
        return s
    }
}












