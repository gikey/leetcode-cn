/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/*

def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        def backtrack(path=[], selects=nums):
            if not selects:
                res.append(path[:])
                return
            for i in range(len(selects)):
                path.append(selects[i])
                backtrack(path, selects[:i] + selects[i+1:])
                path.pop()
        backtrack()
        return res
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    function backtrack(nums = nums, path = []) {
        if (nums.length <= 0) {
            res.push(path);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            backtrack(
                nums.slice(0, i).concat(nums.slice(i + 1)),
                path.concat(nums[i])
            );
        }
    }
    backtrack(nums, []);
    return res;
};
console.log(permute([1, 2, 3]));
// @lc code=end
