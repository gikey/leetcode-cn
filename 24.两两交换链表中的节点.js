/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function LinkList(arr) {
    this.head = new ListNode(arr[0]);
    this.create(arr);
}

LinkList.prototype.create = function(arr) {
    let p = this.head;
    for(let i = 1; i < arr.length; i++) {
        p.next = new ListNode(arr[i]);
        p = p.next;
    }
}

LinkList.prototype.show = function() {
    let p = this.head;
    while(p) {
        p = p.next;
    }
}
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
 * @return {ListNode}
 */
// var swapPairs = function(head) {
//     let dummyHead = new ListNode(-1);
//     dummyHead.next = head;
//     let p = dummyHead;
//     while(p.next && p.next.next) {
//         let q = p.next;
//         p.next = p.next.next;
//         q.next = p.next.next;
//         p.next.next = q;
//         p = p.next.next;
//     }
//     return dummyHead.next;
// };

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
}

const list = new LinkList([1, 2, 3, 4, 5, 6, 7]);
const l2 = swapPairs(list.head);
console.log(JSON.stringify(l2));

// @lc code=end

