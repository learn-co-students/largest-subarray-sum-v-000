function largestSubarraySum(array) {
  let max = 0;
  let currentSum = 0;
  
  array.forEach(n => {
    currentSum += n;
    if (max < currentSum) max = currentSum;
    if (currentSum < 0) currentSum = 0;
  })
  
  return max;
}