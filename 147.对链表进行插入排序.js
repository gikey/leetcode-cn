/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    const dummyHead = new ListNode(-1, head);
    let p = dummyHead;
    let q = dummyHead.next.next;
    while(q) {
        while(p.next.val < q.val) {
            p = p.next;
        }
    }
    return dummyHead.next;
};

// dummy -> 1 -> 4 -> 3 -> 2
//   p           q


const res = insertionSortList({
    val: 1,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 2,
                next: null
            }
        }
    }
});

console.log(res)

// @lc code=end



