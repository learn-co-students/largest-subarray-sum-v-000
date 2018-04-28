function largestSubarraySum(array) {
  let largest = array[0];
  let current = array[0];

  for (let i = 1; i < array.length; i++) {
    if (current < 0) {
      current = 0
    }
    current += array[i]
    if (current > largest) {
      largest = current
    }
  }
  return largest
}
