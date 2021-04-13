/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
	var arr = []
    for(var i = 0; i < s.length; i++) {
	    switch(s.charAt(i)) {
	    	case '{':
	    	    arr.push(-1)
	    	    break
	    	case '[':
	    	    arr.push(-2)
	    	    break
	    	case '(':
	    	    arr.push(-3)
	    	    break
	    	case '}':
	    	    if(arr.pop() + 1 !== 0) return false
	    	    break
	    	case ']':
	    	    if(arr.pop() + 2 !== 0) return false
	    	    break
	        case ')':
	    	    if(arr.pop() + 3 !== 0) return false
	    	    break
	    }
    }
    if(arr.length == 0) return true
    return false
};
// @lc code=end

