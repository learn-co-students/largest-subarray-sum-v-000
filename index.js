
function largestSubarraySum(array){
  let current = 0
  let max = 0
  for (let i = 0; i < array.length; i++) {
    let currentIndex = array[i]
    current = Math.max((currentIndex + current), 0)
    max = Math.max(current, max)
  }
  return max
}


// Either start at thecurrent index or add the current
//element to the previous sum
// Since we want the maximum subarray sum we add the
// current element to the maximum of 0 and previous
// sum (with zero denoting we start new from current el)
