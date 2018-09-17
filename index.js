function largestSubarraySum(array) {
  let highest = array[0];
  let currentHighest = array[0];
  for (let i=1; i < array.length; i++) {
    if (currentHighest + array[i] > 0) {
      currentHighest += array[i];
    } else {
      currentHighest = array[i+1]
      i++
    }
    if (currentHighest > highest) {
      highest = currentHighest;
    }
  }
  return highest;
}
