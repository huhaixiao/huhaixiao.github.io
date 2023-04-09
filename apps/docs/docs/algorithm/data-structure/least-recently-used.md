# LRUCache

LRU 缓存机制可以通过哈希表辅以双向链表实现

```ts
class LRUCache {
    private capacity: number
    private dummyHead: DoublyLinkedList
    private dummyTail: DoublyLinkedList
    private cache: Map<number, DoublyLinkedList>

    setHead(key) {
        const node = this.cache.get(key)

        node.pre.next = node.next
        node.next.pre = node.pre

        node.next = this.dummyHead.next
        node.pre = this.dummyHead

        this.dummyHead.next.pre = node
        this.dummyHead.next = node
    }

    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map
        this.dummyHead = new DoublyLinkedList(null, null)
        this.dummyTail = new DoublyLinkedList(null, null)

        this.dummyHead.next = this.dummyTail
        this.dummyTail.pre = this.dummyHead
    }

    get(key: number): number {
        if(this.cache.has(key)) {
            this.setHead(key)
            return this.cache.get(key).val
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        if(this.cache.has(key)) {
            this.setHead(key)
            this.cache.get(key).val = value
        } else {
            if(this.cache.size >= this.capacity) {
                const node = this.dummyTail.pre

                node.pre.next = node.next
                node.next.pre = node.pre

                node.pre = null
                node.next = null

                this.cache.delete(node.key)
            }
            const node = new DoublyLinkedList(key, value)

            node.pre = this.dummyHead
            node.next = this.dummyHead.next

            node.pre.next = node
            node.next.pre = node

            this.cache.set(key, node)
        }
    }
}

class DoublyLinkedList {
    public pre: DoublyLinkedList
    public next: DoublyLinkedList
    public key: number
    public val: number

    constructor(key, val) {
        this.key = key
        this.val = val
        this.pre = null
        this.next = null
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

```
