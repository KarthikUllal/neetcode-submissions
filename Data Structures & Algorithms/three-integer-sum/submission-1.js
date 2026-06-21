class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {

            // Skip duplicate first elements
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k];

                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[k]]);

                    j++;
                    k--;

                    // Skip duplicate second elements
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }

                    // Skip duplicate third elements
                    while (j < k && nums[k] === nums[k + 1]) {
                        k--;
                    }

                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return res;
    }
}