- 143. Reorder List

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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head || !head.next || !head.next.next) return
    const tail = getTail(head)
    tail.next = head.next
    head.next = tail
    reorderList(tail.next)
};

function getTail(head: ListNode): ListNode {
    let tail = head

    while (tail.next.next) {
        tail = tail.next
    }

    const result = tail.next
    tail.next = null

    return result
}
```