function largestSubarraySum(arr) {
  let sum = 0
  if (arr.filter(val => val >= 0) == arr) {
    arr.map(val => sum += val)
  } else {
    firstPos = arr.find(val => val > 0);
    //dont include anything before first positive
    // dont include anything after the last positive
    lastPos = arr.reverse().find(val => val > 0)
    arr = arr.slice(indexOf(firstPos), indexOf(lastPos));
    while (arr.find(val => val >= 0)) {
      let largestSeq = largestPosSequence(arr)
      let newArr = arr.filter(val => !largestSeq.includes(val)))
      let newlargestSeq = largestPosSequence(newArr)
      let negsBetween = arr.slice(newlargestSeq.slice(-1)[0], largestSeq.slice(-1)[0])
      //if sum of newlargestSeq > sum of negsBetween, sum += sum of newlargestSeq + sum of negsBetween
  }
  return sum
}

function largestPosSequence(arr) { 
  debugger;
  let firstNeg = arr.find(val => val < 0)
  let firstNegIndex = arr.indexOf(firstNeg)
  let longestPosSeq = arr.slice(0, firstNegIndex)
  arr = arr.slice(firstNegIndex + 1)

  while ((arr.find(val => val < 0 ) != undefined)) {
    let newfirstNeg = arr.find(val => val < 0)
    let newfirstNegIndex = arr.indexOf(newfirstNeg)
    let newPosSeq = arr.slice(0, newfirstNegIndex)

    if (newPosSeq.length > longestPosSeq.length) {
      longestPosSeq = newPosSeq
    }
    arr = arr.slice(newfirstNegIndex + 1)
  }
  if (arr.length > 0 && arr.length > longestPosSeq.length ) {
    longestPosSeq = arr
  }
  return longestPosSeq
}
