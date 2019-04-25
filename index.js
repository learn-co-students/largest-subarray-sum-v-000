function largestSubarraySum(arr){
  if (arr.length === 1){
    if (!arr['max']){
      arr['max']=arr[0]
    }
    else if (arr[0] > arr['max']){
      arr['max'] = arr[0]
    }
  }
  if (arr.length > 1){
    if (!arr['max']){
      arr['max']= arr[arr.length-1]
    }
    let a = arr.pop() || 0
    let b = arr.pop() || 0
    let s = a + b
    console.log(s)
    if (s > 0 ){
      arr.push(s)

      if (s > arr['max']){
        arr['max'] = s
      }
      console.log(arr)
      return largestSubarraySum(arr)
    }
    else if (s<0){
      console.log(arr)
      return largestSubarraySum(arr)
    }
  }

  return arr['max']
}
