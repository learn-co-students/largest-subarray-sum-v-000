// goal: derive the largest sum from a subarray within an array
// brute force approach [O(n^2)]: find every possible subarray, get the sum, and if the sum is higher than the current record, that becomes the sum

// iterate over array once - [O(n)]
//1 have 2 variables: (1) stores the current largest sum; and (2) stores the running total as it loops over array
//2 loop over the array
//3 return the answer which is the greater of (0 or the current answer + the current value of the index)
//4 return the sum which is the greater of (the current answer or current sum)
//5 return sum after the looping is complete
//let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
  let answer = 0
  let sum = 0
  for (let i=0; i<array.length; i++) {
    answer = Math.max(0, answer + array[i])
    sum = Math.max(sum, answer)
  }
  return sum
}
