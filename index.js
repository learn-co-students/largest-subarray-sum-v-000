function largestSubarraySum(arr) {
  debugger;
  let sum = 0
  if (arr.filter(val => val >= 0) == arr) {
    arr.map(val => sum += val)
  } else {
      let negsBetween;
      let firstPos = arr.find(val => val > 0);
      let firstPosIndex = arr.indexOf(firstPos);
      //dont include anything before first positive
      // dont include anything after the last positive
      let lastPos = arr.reverse().find(val => val > 0);
      arr.reverse()
      let lastPosIndex = arr.lastIndexOf(lastPos);
      arr = arr.slice(firstPosIndex, lastPosIndex + 1);
      let largestSeq = largestPosSequence(arr);
      let largestSeqFirstIndex = arr.indexOf(largestSeq.slice(-1)[0]);
      largestSeq.map(val => sum += val)

      while ((arr.find(val => val >= 0) != undefined)) {
        let newArr = arr.slice(0, arr.indexOf(largestSeq.slice(0)[0])).concat(arr.slice(arr.indexOf(largestSeq.slice(-1)[0])).slice(1))
        let newLargestSeq = largestPosSequence(newArr)
        if (arr.indexOf(newLargestSeq.slice(-1)[0]) < largestSeqFirstIndex) {
          negsBetween = arr.slice(arr.indexOf(newLargestSeq.slice(-1)[0]) + 1, arr.indexOf(largestSeq.slice(0)[0]))
        } else {
          negsBetween = arr.slice(arr.indexOf(largestSeq.slice(-1)[0]) + 1, arr.indexOf(newLargestSeq.slice(0)[0]))
        }
        let newLargestSeqSum = 0;
        newLargestSeq.map(val => newLargestSeqSum += val)
        let negsBetweenSum = 0;
        negsBetween.map(val => negsBetweenSum += val)
        if (newLargestSeqSum > Math.abs(negsBetweenSum)) {
          sum += newLargestSeqSum + negsBetweenSum
        }
        arr = arr.slice(0, arr.indexOf(newLargestSeq.slice(0)[0])).concat(arr.slice(arr.indexOf(largestSeq.slice(-1)[0])).slice(1))
    }
  }
  return sum
}


function largestPosSequence(arr) {
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
