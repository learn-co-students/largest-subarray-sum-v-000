function largestSubarraySum(array) {
  let sequence = 0
  let largest = 0

  for (let i = 0; i < array.length; i++) {
    sequence = array[i]
    if (sequence > largest) {
      largest = sequence
    }
    for (let l = i + 1; l < array.length; l++) {
      sequence = array[l] + sequence
      if (sequence > largest) {
        largest = sequence
      }
    }
  }
  
  return largest

}

// [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
