function largestSubarraySum(array) {
  let currentMax = array[0];
  let globalMax = array[0];

  for (let i = 1; i  < array.length; i++) {
    currentMax = Math.max(array[i], array[i] + currentMax)

    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
}
