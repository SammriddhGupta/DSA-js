function validAnagrams(str1, str2) {
    const freq1 = str1.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const freq2 = str2.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(freq1).every((char) => freq1[char] === freq2[char]);
}

module.exports = validAnagrams;
