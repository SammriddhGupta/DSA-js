function countOccurrences(word, find) {
    let count = 0;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i] == find)
            count++;
    }
    return count

}

// 1 liner solution: 
/* const countOccurrences = (word, find) => word.split(find).length - 1; */

module.exports = countOccurrences;
