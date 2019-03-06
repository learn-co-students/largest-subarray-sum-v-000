function largestSubarraySum(array) {
    let ans = 0;
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
        ans = Math.max(0, ans + array[i]);
        sum = Math.max(sum, ans);
    }
    return  array.sort((a,b)=> a-b)[array.length -1] < 0 ?
                array.sort((a,b)=> a-b)[array.length -1] :
                sum;
};
