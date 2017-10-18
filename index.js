function largestSubarraySum(array) {
  let sums = {};
  for (let a=0; a<array.length-1; a++) {
    if (array[a] > 0) {
      sums[a] ={}
      for (let z=a+1; z<array.length; z++) {
        sums[a][z] = 0;
        for (let i=a; i<=z; i++) {
          sums[a][z] += array[i];
        }
      }
    }
  }
  // console.log(sums)
  let sumsToArr = [];
  for (let key in sums) {
    for (let k2 in sums[key])
       sumsToArr.push(sums[key][k2]);
  }
  return sumsToArr.reduce((acc, cur) => Math.max(acc, cur));
}
