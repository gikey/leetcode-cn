/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let i = 0;
    let result = 0;
    const romanArabicMap = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };

    while(i < s.length) {
        if (i < s.length - 1 && romanArabicMap[s[i]] < romanArabicMap[s[i+1]]) {
            result += (romanArabicMap[s[i + 1]] - romanArabicMap[s[i]]);
            i += 2;
        } else {
            result += romanArabicMap[s[i]];
            i++;
        }
    }
    return result;
};

// @lc code=end

