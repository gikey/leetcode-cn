/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var arr = [];
  function dfs(node, arr) {
    if (node) {
      dfs(node.left, arr);
      arr.push(node.val);
      dfs(node.right, arr);
    }
  }
  dfs(root, arr);
  return arr;
};
// @lc code=end
