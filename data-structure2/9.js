// 汉诺塔问题     三次递归，三叉树  后序遍历,从数据结构的角度理解问题

// 将n个盘子从1移动到3，2作为缓冲
function move(n, one, two, three) {
    if (n == 1) return console.log('one time', `${one} to ${three}`);
    // 将n-1个盘子从1移动到2，3作为缓冲
    move(n - 1, one, three, two);
    // 将最后一个盘子从1移动到3
    move(1, one, two, three);
    // 将n-1个盘子从2移动到3，1作为缓冲
    move(n - 1, two, one, three);
}
move(3, 'one', 'two', 'three');