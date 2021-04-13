/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    for(let i = 0; i < n.length; i++) {
        if (n[i] === '1') {
            count++;
        }
    }
    return count;
};

console.log(hammingWeight('00000000000000000000000000001011'))
// @lc code=end

