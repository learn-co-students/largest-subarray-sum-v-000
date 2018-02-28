function largestSubarraySum(array) {
  let sum = 0;
  let largestSum = 0;
  array.forEach(number => {
    if (number > 0) {
      sum += number;
      if (sum > largestSum) {
        largestSum = sum;
      }
    } else if (sum + number > 0) {
      sum += number;
    } else {
      sum = 0;
    }
  })
  return largestSum;
}