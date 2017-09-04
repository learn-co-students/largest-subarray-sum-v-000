function largestSubarraySum(array) {
  let bestSum = array[0];
  
  for(let i = 0; i < array.length; i++){
    let currentSum = array[i];

    for(let j = array.length; j > i; j--){
      let subArray = array.slice(i, j);

      currentSum = subArray.reduce((sum, val) => {
        return sum + val;})

      if (currentSum > bestSum){
        bestSum = currentSum
      }
    }

  }
  return bestSum;
}
