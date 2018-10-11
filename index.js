// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
  let maxSum = 0;
  let currentSum = 0;

  for (let num of array) {
    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
