/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let p = dummyHead;
    if (!head) {
        return head;
    }
    while(p.next.val !== x) {
        p = p.next;
        if (!p) {
            return head;
        }
    }
    let q = p.next.next;
    while(q) {
        if (q.val > p.val) {
            
        }
    }
};
// @lc code=end

