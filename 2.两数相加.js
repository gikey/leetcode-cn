/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// function createLinkList(arr) {
//     let head = new ListNode(arr[0]);
//     let p = head;
//     for(let i = 1; i < arr.length; i++) {
//         p.next = new ListNode(arr[i]);
//         p = p.next;
//     }
//     return head;
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    let p = l1;
    let q = l2;
    let current = head;
    let carry = 0;
    while(p || q) {
        const x = p ? p.val : 0;
        const y = q ? q.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        p = p ? p.next : null;
        q = q ? q.next : null;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return head.next;
};
// @lc code=end

