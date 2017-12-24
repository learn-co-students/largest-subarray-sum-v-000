/*
  1. Define a max variable and set equal to 0
  2. iterate through array, initially setting sequenceStart to 0
  3. On each iteration, get the sum of the subarray from sequenceStart to i
  4. if sequence is > max, set max = sequence
  5. if sequence is < max, set sequenceStart = i to start a new subArray sequence
*/

function largestSubarraySum(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let sequenceStart = 0;
    let sequence = array.slice(sequenceStart, i).reduce((a, b) => { return a + b }, 0);
    if (sequence > max) {
      max = sequence;
    } else {
      sequenceStart = i;
    }
  }
  return max;
}