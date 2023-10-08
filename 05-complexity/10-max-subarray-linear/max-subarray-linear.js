function maxSubarraySum(arr, k) {
    let currSum = 0;
    let maxSum = 0;

    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    currSum = maxSum;

    for (let i = k; i < arr.length; i++) {
        currSum = currSum - arr[i - k] + arr[i];

        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}

module.exports = maxSubarraySum;
