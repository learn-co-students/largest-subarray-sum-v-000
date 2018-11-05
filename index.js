function largestSubarraySum(nums) {
  let max_so_far =  0
  let max_ending_here = 0
  for (let i=0; i < nums.length; i++) {
    max_ending_here += nums[i]
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here
    }
    if (max_ending_here < 0) {
      max_ending_here = 0
    }
  }
  return max_so_far
}
