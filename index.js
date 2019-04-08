function largestSubarraySum (arr) {
  let sum = 0;
  let subArr = arr.slice(0, arr.indexOf(Math.min(...arr)))
  for (let n of subArr) {
    sum += n
  }
  return sum;
}