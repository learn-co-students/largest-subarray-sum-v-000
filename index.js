function largestSubarraySum(arr){
  if (arr.length > 1){
    let s = arr.pop() + arr.pop()
    console.log(s)
    if (s > 0 ){
      arr.push(s)
      console.log(arr)
      if (!arr['max']){
        arr['max']=s
      }
      else if (s > arr['max']){
        arr['max'] = s
      }
      return largestSubarraySum(arr)
    }
    else if (s<0){
      console.log(arr)
      return largestSubarraySum(arr)
    }
  }

  return arr['max']
}
