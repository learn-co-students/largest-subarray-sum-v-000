function largestSubarraySum(array) {
    let currentSum = 0;
    let largestSum = 0;
    array.forEach(number => {
      if (number > 0) {
        currentSum += number;
        if (currentSum > largestSum) {
          largestSum = currentSum;
        }
      } else if (currentSum + number > 0) {
        currentSum += number;
      } else {
        currentSum = 0;
      }
    })
    return largestSum;
  } 