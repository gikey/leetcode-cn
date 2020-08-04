/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const version1Arr = version1.split('.');
    const version2Arr = version2.split('.');

    for(let i = 0; i < Math.max(version1Arr.length, version2Arr.length); i++) {
        version1Arr[i] = version1Arr[i] || 0;
        version2Arr[i] = version2Arr[i] || 0;

        if (parseInt(version1Arr[i]) > parseInt(version2Arr[i])) {
            return 1;
        } else if (parseInt(version1Arr[i]) < parseInt(version2Arr[i])) {
            return -1;
        }
    }
    return 0;
};
// @lc code=end

