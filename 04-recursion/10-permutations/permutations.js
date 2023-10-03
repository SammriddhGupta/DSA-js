function permutations(str) {
    let result = [];

    if (str === '') {
        result.push('');
        return result;
    }

    for (let i = 0; i < str.length; i++) {
        const firstChar = str[i];
        const restOfStr = str.slice(0,i) + str.slice(i+1);
        const subPermu = permutations(restOfStr);

        for (let j = 0; j < subPermu.length; j++) {
            result.push(firstChar + subPermu[j]);
        }
    }
    return result;
}

module.exports = permutations;
