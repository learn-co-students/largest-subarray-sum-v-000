// break the input array into subarrays with alternating sign
// [1, -1, 5, 3, -7, 4, 5, 6, -100, 4] would become
// [[1],[-1],[5, 3],[-7],[4,5,6],[-100],[4]]
// reduce each subarray into it's total
// [1, -1, 8, -7, 15, -100, 4]
// for each negative value, merge with the 2 neighbors to obtain a
// new result
// [9, 16, -81]
// answer is the max of this array.

function createSubarrays(array) {
  const subarrays=[];

  let workArray = [array[0]];
  for(let i = 1; i < array.length; i++) {
    if ((workArray[0]<0 && array[i] < 0) ||
        (workArray[0]>=0 && array[i]>=0)) {
          workArray.push(array[i]);
        }
    else {
      subarrays.push(workArray);
      workArray = [array[i]];
    }
  }
  subarrays.push(workArray)
  return subarrays
}

function largestSubarraySum(array) {

  let reduced = createSubarrays(array).map(arr => (
    arr.reduce((sum, value) => (sum += value),0)
  ));

  const subArraySums = [];
  if (reduced[0] < 0) reduced.shift(); // eliminate leading negative, if necessary
  
  for (let i = 1; i < reduced.length; i = i + 2) {
    subArraySums.push(reduced[i-1] + reduced[i] + reduced[i+1])
  }

  return subArraySums.reduce((max, value) => (
          max = value > max ? value : max
        ), subArraySums[0]);

}