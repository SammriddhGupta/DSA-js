function numberRange(start, end) {
    if (start === end) {
        return [start];
    }

    const nums = numberRange(start, end - 1);
    nums.push(end);
    return nums;
}

module.exports = numberRange;
