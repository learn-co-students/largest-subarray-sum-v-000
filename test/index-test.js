describe('#largestSubarraySum', function() {
	it('largest subarray sum', function(){
		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
		expect(largestSubarraySum(array)).toEqual(16)
	})

	it('bigger sample', function(){
		let array = [17, -100, 1, -1, 5, 3, -7, 4, 5, 6, -100, 6, 4]
		expect(largestSubarraySum(array)).toEqual(17)
	})
});
