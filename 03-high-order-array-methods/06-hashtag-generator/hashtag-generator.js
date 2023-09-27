/* function generateHashtag(str) {
    if (str.trim() === '') {
        return false;
    }

    const words = str.trim().split(/\s+/);
    
    const capWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    const hashtag = "#" + capWords.join("");

    return hashtag.length > 140 ? false : hashtag;
} */

// alternate way
function generateHashtag(str) {
    const hashtag = str.split(' ').reduce(function (tag, word) {
        return tag + word.charAt(0).toUpperCase() + word.substring(1);
    } ,'#');
    return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
