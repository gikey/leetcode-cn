/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let result = '';
    while(n) {
        let m = n % 26;
        if (m === 0) {
            m = 26;
            n -= 26;
        }
        n = Math.floor(n / 26);
        result = String.fromCharCode(m + 64) + result;
    }
    return result;
};
// @lc code=end

