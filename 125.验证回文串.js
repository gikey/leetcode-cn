/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    return s === s.split('').reverse().join('');
    // let i = 0;
    // let j = s.length - 1;
    // while(i < j) {
    //     if (s.charAt(i) !== s.charAt(j)) {
    //         return false;
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
};
// @lc code=end

