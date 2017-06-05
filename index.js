function largestSubarraySum(array) {
	var largestSum = array[0],
		sum = 0;
	array.forEach(function(num) {
		sum += num;
		if (sum > largestSum) {
			largestSum = sum;
		}
		if (sum < 0) {
			sum = 0;
		}
	});
	return largestSum;
}