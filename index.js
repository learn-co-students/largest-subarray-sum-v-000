function largestSubarraySum(arr) {
  let largestSum = 0
  let currentSum = 0

  arr.forEach(num => {
    currentSum += num
    if (currentSum > largestSum) largestSum = currentSum
    if (currentSum < 0) currentSum = 0
  })
  return largestSum
}
