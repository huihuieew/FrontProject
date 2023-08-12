// 线性数据结构    哈希表，基于数组的实现
// 哈希表 提供快速的插入/删除/查找，比树快
// 基于哈希表，实现集合/字典 object set map

// 下标重复   链地址法/开放地址法

// 哈希表要素 storage limit count
// 哈希函数 扩容/缩容
function hashTable() {
    return {
        loadFactor: [0.25, 0.75], // 0.25压缩 0.75扩容
        storage: [],
        limit: 7,
        count: 0,
        hashFunc(key, size) {
            let hashCode = 0;
            // 秦久韶算法 hash化得到hashCode大数字
            for (let i = 0; i < key.length; i++) {
                hashCode = hashCode * 37 + key.charCodeAt(i)
            }
            // 对hashCode取余，得到索引位置
            let index = hashCode % size;
            return index;
        },
        put(key, value) {
            let index = this.hashFunc(key, this.limit);
            let bucket = this.storage[index];
            if (bucket == undefined) {
                bucket = []
                this.storage[index] = bucket;
            }
            for (let tuple of bucket) {
                if (tuple[0] === key) {
                    tuple[1] = value;
                    return;
                }
            }
            bucket.push([key, value]);
            this.count++;
        },
        get(key) {
            let index = this.hashFunc(key, this.limit);
            let bucket = this.storage[index];
            if (!bucket) return;
            for (let tuple of bucket) {
                if (tuple[0] === key) {
                    return tuple[1];
                }
            }
            return;
        },
        remove(key) {
            let index = this.hashFunc(key, this.limit);
            let bucket = this.storage[index];
            if (!bucket) return false;
            for (let [index, tuple] of bucket) {
                if (tuple[0] === key) {
                    bucket.splice(index, 1)
                    this.count--;
                    return tuple[1];
                }
            }
        },
        isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % 2 === 0) return false;
            }
            return true;
        },
        getPrime(num) {
            while (!this.isPrime(num)) {
                num++;
            }
            return num;
        },
        isEmpty() {
            return this.count === 0;
        },
        size() {
            return this.count;
        },
        toString() {
            return 'no such method.';
        }
    }
}
let h = hashTable();
h.put('a', 'aaa')
h.put('b', 'bbb')
h.put('c', 'ccc')
h.put('d', 'ddd')
console.log('h', h.storage[0], h.storage[1], h.storage[2], h.storage[6],);



















