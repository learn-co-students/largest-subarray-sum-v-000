describe('#largestSubarraySum', function() {
	it('largest subarray sum', function(){
		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
		expect(largestSubarraySum(array)).toEqual(16)
	})
	it('largest subarray sum when all negatives', function(){
		let array = [-21, -1, -7, -100, -4]
		expect(largestSubarraySum(array)).toEqual(-1)
	})
	it('largest subarray sum when encompassing negatives', function(){
		let array = [5, -1, -2, 500, -30, 4]
		expect(largestSubarraySum(array)).toEqual(502)
	})
	it('largest subarray sum when whole array', function(){
		let array = [4, 2, 1, 0, 10]
		expect(largestSubarraySum(array)).toEqual(17)
	})
});
