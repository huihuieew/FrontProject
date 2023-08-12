// 归并排序   this指向与调用位置的关系
function dfs(start, end) {
    if (start >= end) return;
    let mid = Math.floor((start + end) / 2);
    console.log('mid', mid);
    // console.log('this', this);
    let data = [1, 2, 3]
    dfs(start, mid)
    dfs(mid + 1, end)
    merge(start, mid, end);
}
function merge(start, mid, end) {
    let temp = [];
    let i = start;
    let j = mid + 1;
    let pos = 0;
    while (i <= mid && j <= end) {
        if (data[i] < data[j]) {
            temp[pos++] = data[i++]
            // pos++;
            // i++;
        } else {
            temp[pos++] = data[j++]
            // pos++;
            // j++;
        }
    }
    while (i <= mid) {
        temp[pos++] = data[i++]
    }
    while (j <= end) {
        temp[pos++] = data[j++]
    }
    for (let item of temp) {
        data[start++] = item;
    }
}
function sort(arr) {
    dfs(0, arr.length - 1);
    return arr;
}
const data = [3, 4, 2, 6, 55, 7];
console.log('data', sort(data));
console.log('data', data);