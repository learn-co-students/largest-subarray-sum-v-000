let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
  // 1. find the largest subarray sum starting from index 0
  let sum_array = [array[1],array[0]+array[1]];
  for (let i = 2; i < array.length; i++) {
    if(sum_array[i-1]+array[i] < array[i]) { // then this is no longer the largest subarray
      sum_array.push(array[i]);
    } else {
      sum_array.push(sum_array[i-1]+array[i]);
    }
  }
  return Math.max(...sum_array);
}

//console.log(largestSubarraySum(array));
