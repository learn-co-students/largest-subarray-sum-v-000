//up-optimized brute force
function largestSubarraySum(array){
  let sum
  let tempArr
  let tempSum
  for (let startIndex = 0; startIndex < array.length; startIndex++) {
    for (let endIndex = 1; endIndex < array.length; endIndex++) {
      if (startIndex < endIndex){
        tempArr = array.slice(startIndex, endIndex + 1)
        tempSum = tempArr.reduce((total, num) => (total + num))
        if (!sum || sum < tempSum) {
          sum = tempSum
        }
      }
    }
  }
  return sum
}
// O(n^2)

//using greedy algorithm
//using kadane's algorithm

function greedySubarraySum(array){
  let maxEndingHere = 0
  let maxSoFar
  for (let index = 0; index < array.length; index++) {
    maxEndingHere = maxEndingHere + array[index]
    // if we don't have a sum to beat, we set it here.
    // can also declare at top of function as - Number.MAX_SAFE_INTEGER
    if (!maxSoFar) maxSoFar = maxEndingHere
    if (maxSoFar < maxEndingHere){
      maxSoFar = maxEndingHere
    }
    if (maxEndingHere < 0){
      maxEndingHere = 0
    }
  }
  return maxSoFar
}

// O(n)
// THE EFFICIENCY!!!
// edge case that would break this would be if all sub arrays sums are below zero

// How does this work?
// It loops through the whole array once.
// The algorithm adds the current number to the accumulated sum
// If the sum dips below zero, algorithm resets the sum
// The sum returned at the end is the largest possible sum