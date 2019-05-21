function largestSubarraySum(array) {
  let currentSum = 0
  let maxSum  = 0
  for (var i = 0; i < array.length; i++) {
    let currentNum = array[i]

    currentSum = Math.max((currentNum + currentSum), 0)

    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}
