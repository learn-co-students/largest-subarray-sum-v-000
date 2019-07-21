describe('#largestSubarraySum', function() {
	it('largest subarray sum', function(){
		let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
		expect(largestSubarraySum(array)).toEqual(16)
	})
});

// maybeMax
// 1
// 0
// 5
// 8
// 1
// 5
// 10
//
// max
// 1
// 1
// 5
// 8
// 10
