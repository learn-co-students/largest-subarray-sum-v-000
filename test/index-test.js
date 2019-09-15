describe('#largestSubarraySum', function() {
  it('largest subarray sum', function() {
    let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];
    expect(largestSubarraySum(array)).toEqual(16);
  });
  it('largest subarray sum', function() {
    let array = [2, -1, 2, 3, -9];
    expect(largestSubarraySum(array)).toEqual(6);
  });
  it('largest subarray sum', function() {
    let array = [-1, 2, 3, -9, 11];
    expect(largestSubarraySum(array)).toEqual(11);
  });
  it('largest subarray sum', function() {
    let array = [-1, 2, 3, -9, 2];
    expect(largestSubarraySum(array)).toEqual(5);
  });
  it('largest subarray sum', function() {
    let array = [-2, -1, 1, 2];
    expect(largestSubarraySum(array)).toEqual(3);
  });
  it('largest subarray sum', function() {
    let array = [100, -9, 2, -3, 5];
    expect(largestSubarraySum(array)).toEqual(100);
  });
  it('largest subarray sum', function() {
    let array = [1, 2, 3];
    expect(largestSubarraySum(array)).toEqual(6);
  });
  it('largest subarray sum', function() {
    let array = [-1, -2, -3];
    expect(largestSubarraySum(array)).toEqual(0);
  });
});
