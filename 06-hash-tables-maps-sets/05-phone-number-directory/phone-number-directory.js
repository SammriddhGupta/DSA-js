function phoneNumberDirectory(arrPH) {
    const phNum = new Map();

    for (const entry of arrPH) {
        const [names, ph] = entry.split(':');

        phNum.set(names, ph);
    }
    
    return phNum;
}

module.exports = phoneNumberDirectory;
