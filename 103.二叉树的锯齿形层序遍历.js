/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const result = [];
    if (!root) {
        return result;
    }
    const queue = [root];
    let level = 0;
    while(queue.length > 0) {
        const currentLevelSize = queue.length;
        result.push([]);
        level++;
        for(let i = 0; i < currentLevelSize; i++) {
            const current = queue.shift();
            result[result.length - 1].push(current.val);
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
        if (level % 2 === 0) {
            result[result.length - 1].reverse();
        }
    }
    return result;
};
// @lc code=end
