function longestConsecutiveSequence(nums) {
    const numSet = new Set(nums);

    let longestSeq = 0;

    for (const num of numSet) {
        if (!numSet.has(num-1)) {
            let currentNum = num;
            let currSeq = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currSeq++;
            }
            longestSeq = Math.max(longestSeq, currSeq);
        }
    }
    return longestSeq
}

module.exports = longestConsecutiveSequence;
