function maxSubarraySum(arr, k) {
    let maxSum = -Infinity;

    for (let i = 0; i <= arr.length - k; i++) {
        let currSum = 0;
        
        for (let j = i; j < i+k; j++) {
            currSum += arr[j];
        }

        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = maxSubarraySum;
