function largestSubarraySum(arr){


    const current = { sum: arr[0], start: 0, end: 0 }
    let max = Object.assign({}, current)

    for(let i = 1; i < arr.length; i++){
        if(current.sum < 0){
            current.sum = 0
            current.start = null
            current.end = null
        }
        current.sum = current.sum + arr[i]
        current.end = i
        if(current.start === null) current.start = i
        if(current.sum > max.sum){
            max = Object.assign({}, current)
        }
    }
    return max.sum
}


