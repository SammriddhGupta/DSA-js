function twoSum(arr, target) {
    const numSet = new Set();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if (numSet.has(complement)) {
            return [arr.indexOf(complement), i]; // this will return an array with index of complement num and index of other num (i.e index 0 1 2 3 not the numbers themselves)
        }

        numSet.add(arr[i]); 
    }

    return [];
}

module.exports = twoSum;
