function largestSubarraySum(array) {
  let sequence = 0
  let largest = 0
  
  for (let i = 0; i < array.length; i++) {
    sequence = Math.max(0, sequence + array[i])
    largest = Math.max(sequence, largest)
  }
  return largest
}