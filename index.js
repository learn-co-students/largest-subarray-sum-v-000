function largestSubarraySum(arr) {
  let globalLargest = 0;
  let localLargest = arr[0];
  const subArray = arr.slice(1, arr.length - 1);

  subArray.forEach(n => {
    localLargest += n;
    if (localLargest > globalLargest) { globalLargest = localLargest };
  });

  return globalLargest
}

/*
Element 1:
globalLargest: 0
  [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
  localLargest: 1
  localLargest: 0
  localLargest: 5
  localLargest: 8
  localLargest: 1
  localLargest: 4
  localLargest: 9
  localLargest: 16
  localLargest:

*/
