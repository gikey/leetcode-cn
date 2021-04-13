/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;
    let anchor = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== chars[i+1] || i >= chars.length - 1 ) {
            chars[write++] = chars[i];
            if (i > anchor) {
                const countArr = (i - anchor + 1).toString().split('');
                while(countArr.length > 0) {
                    chars[write++] = countArr.shift();
                }
            }
            anchor = i + 1;
        }
    }
    return write;
};

// @lc code=end

