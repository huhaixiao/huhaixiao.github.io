- 25. Reverse Nodes in k-Group

```tsx
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if(!head) return head
    
    let tail = head
    let counter = k
    while(tail && --counter) {
        tail = tail.next
    }

    if(!tail) return head

    const next = tail.next
    tail.next = null
    const rest = reverseKGroup(next, k)
    const result = reverse(head)
    head.next = rest // reverse之后head变成了tail

    return result
};

function reverse(head) {
    if(!head || !head.next) return head
    const tail = reverse(head.next)

    head.next.next = head
    head.next = null

    return tail
}
```