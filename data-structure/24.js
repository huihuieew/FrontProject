// 哈希表
// 基于数组实现  提供快速的插入/删除/查找  比树还快
// 没有顺序 key唯一  基于哈希表实现集合/字典 object set map 都是哈希表结构
// key hashcode
// 常见字符集编码 ASCII GB2312 GBK UTF-8 编码系统
// key 哈希函数为大数字hashcode 哈希化到数组size内 遍历完成最终为哈希表

// 下标重复
// 链地址法 开放地址法

// 哈希表结构 要素 
// 仓库storage 限长limit 数量count
// 哈希函数 扩容/缩容 
class hashTable { // 链地址法
    loadFactor // 0.25压缩 0.75扩容
    constructor() {
        this.storage = [] // 数组
        this.limit = 7    // 数组初始长度
        this.count = 0    // 已有数据个数，计算装填因子
    }
    hashFunc(str, size) {
        let hashCode = 0
        // 秦久韶算法 hash化得到hashCode大数字
        for (let i = 0; i < str.length; i++) {
            hashCode = hashCode * 37 + str.charCodeAt(i)
        }
        // 对hashCode取余，得到哈希表中的位置索引
        let index = hashCode % size
        return index
    }
    put(key, value) {
        let index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }
        for (let tuple of bucket) {
            if (tuple[0] === key) {
                tuple[1] = value
                return;
            }
        }
        bucket.push([key, value])
        this.count++
    }
    get(key) {
        let index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]
        if (bucket == null) return null;
        for (let tuple of bucket) {
            if (tuple[0] === key) return tuple[1];
        }
        return null;
    }
    remove(key) {
        let index = this.hashFunc(key, this.limit)
        let bucket = this.storage[index]
        if (!bucket) return;
        for (let [index, tuple] of bucket.entries()) {
            if (tuple[0] === key) {
                bucket.splice(index, 1)
                this.count--
                return tuple[1]
            }
        }
        return;
    }
    isEmpty() {
        return this.count == 0
    }
    size() {
        return this.count
    }
    resize(newLimit) {
        newLimit = this.getPrime(newLimit)
        let oldStorage = this.storage
        this.storage = []
        this.limit = newLimit
        this.count = 0
        for (let bucket of oldStorage) {
            if (!bucket) continue;
            for (let tuple of bucket) {
                this.put(tuple[0], tuple[1])
            }
        }
    }
    isPrime(num) {
        if (num <= 1) return false;
        // for (let i = 2; i < num; i++) {
        //     if (num%i === 0) {
        //         return false
        //     }
        // }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % 2 === 0) return false;
        }
        return true
    }
    getPrime(num) {
        while (!this.isPrime(num)) {
            num++
        }
        return num;
    }
    // resize(newLimit) {
    //     newLimit = this.getPrime(newLimit)
    // }
}
let h = new hashTable()
h.put('qwe', 'aaa')
h.put('asd', 'bbb')
h.put('zxc', 'ccc')

























