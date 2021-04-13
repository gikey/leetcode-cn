/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let p = head;
    let q = head;
    if (!head || !head.next) {
        return head;
    }
    let length = 1;
    while(p.next) {
        length++;
        p = p.next;
    }
    k = k % length;
    if (k === 0) {
        return head;
    }
    let count = length - k - 1;
    while(count) {
        count--;
        q = q.next;
    }
    const newHead = q.next;
    q.next = null;
    p.next = head;
    return newHead;
};
// @lc code=end

