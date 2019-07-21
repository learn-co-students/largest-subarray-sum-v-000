function largestSubarraySum(array){
  let max = array[0]
  let maybeMax = max

  if (array.length == 0){return false}
  if (array.length == 1){return array[0]}

  for (let i = 1; i < array.length; i++) {
    maybeMax = Math.max((maybeMax + array[i]), array[i])
    max = Math.max(maybeMax, max)
  }

  return max
}
