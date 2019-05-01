function largestSubarraySum(array){
    let maxHere = array[0]
    let maxSoFar = array[0]

    for (let i = 1; i<array.length; i++){
        maxHere = Math.max(array[i], array[i] + maxHere)
        maxSoFar = Math.max(maxSoFar, maxHere)
    }

    return maxSoFar

}