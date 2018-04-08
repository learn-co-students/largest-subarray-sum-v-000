const sumArray = array => {
  let sum = 0;
  if (!!array) {
    for (let element of array) {
      sum += element
    }
  }
  return sum;
}

const largestSubarraySum = array => {
  let sum = sumArray(array);
  for (let i = 0; i < array.length; i++) {
    let leftArray = array.slice(0, i + 1);
    let rightArray = array.slice(i + 1);
    if (sumArray(leftArray) > sumArray(rightArray) && sumArray(leftArray) > sum) {
      sum = sumArray(leftArray);
    } else if (sumArray(rightArray) > sumArray(leftArray) && sumArray(rightArray) > sum) {
      sum = sumArray(rightArray);
    }
  }
  return sum;
}
