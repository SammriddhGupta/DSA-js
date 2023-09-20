function findMissingNumber(arr) {
    if (arr.length === 0)
        return 1;

    const n = arr.length + 1;
    const sum = n * (n+1) / 2;
    
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    // shorter way
    // const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return sum - actualSum;
    
}

module.exports = findMissingNumber;
