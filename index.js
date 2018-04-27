function largestSubarraySum(numbers) {
  // push to array and reduce
  let subArray = [];
  let currentSum = 0;
  let largest = 0;
  numbers.forEach(num => {
    if (currentSum + num > 0) {
      subArray.push(num);
      currentSum = subArray.reduce((sum, value) => sum + value);
      largest = currentSum > largest ? currentSum : largest;
    } else {
      subArray = [];
      currentSum = 0;
    }
  });
  return largest;
}
