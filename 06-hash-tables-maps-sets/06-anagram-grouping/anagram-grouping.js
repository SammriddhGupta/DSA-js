function anagramGrouping(wordArr) {
    const anagramGroups = new Map();

    for (const word of wordArr) {
        const sortedChars = word.split('').sort().join('');
        
        if (anagramGroups.has(sortedChars)) {
            anagramGroups.get(sortedChars).push(word);
        }
        else {
            anagramGroups.set(sortedChars, [word]);
        }
    }

    return Array.from(anagramGroups.values());
}

module.exports = anagramGrouping;
