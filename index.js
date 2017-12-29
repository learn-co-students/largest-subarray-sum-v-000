function largestSubarraySum(arr) {
  let best = 0;
  let currArr = [];

  for (let i = 0; i < arr.length; i++) {
    currArr.push(arr[i]);
    if (arr[i] > best) {
      best = arr[i];
    }
    for (let j = i + 1; j < arr.length; j++) {
      currArr.push(arr[j]);
      const currSum = currArr.reduce((sum, n) => sum + n, 0);

      if (currSum > best) {
        best = currSum;
      }
    }
    currArr = [];
  }

  return best;
}
