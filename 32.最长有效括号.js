/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1];
    let maxlength = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length > 0) {
                maxlength = Math.max(maxlength, i - stack[stack.length - 1])
            } else {
                stack.push(i);
            }
        }
    }
    return maxlength;
};
// @lc code=end

