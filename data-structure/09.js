// 汉诺塔问题 三叉树 三次递归调用

// 将n个盘子从1移到3，2作为缓冲
function move(num, one, two, three) {
    // 退出条件 最小子问题
    if (n == 1) {
        console.log('zuixiao ziwenti.');
        return;
    }
    // 递归调用 子问题 执行任务，做任务
    // 将n-1个盘子从1移动到2，3作为缓冲
    move(n - 1, one, three, two)
    // 将最后一个盘子从1移动到3
    move(1, one, two, three)
    // 将n-1个盘子从2移动到3，1作为缓冲
    move(n - 1, two, one, three)
}







