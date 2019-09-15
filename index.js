// refer to https://javascript.info/task/maximal-subarray for strategies of solutions
function largestSubarraySum(array) {
  let sum = 0;
  let maxSum = 0;

  if (array.length === 0 || array.find(({ ele }) => ele > 0) === 'undefined') {
    return maxSum;
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum < 0) {
      sum = 0;
    } else if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
