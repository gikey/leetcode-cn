/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    if (!root) {
        return result;
    }
    const queue = [root];
    while(queue.length) {
        const currentLevelSize = queue.length;
        result.push([]);
        for(let i = 0; i < currentLevelSize; i++) {
            const current = queue.shift();
            result[result.length - 1].push(current.val);
            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }
    }
    return result;
};
// @lc code=end

