function largestSubarraySum(array) {
	let currentMax = 0;
	let max = 0;

	for (let i = 0; i < array.length; i++) {
		currentMax = Math.max(0, currentMax + array[i]);
		max = Math.max(max, currentMax);
	}
	return max;
}