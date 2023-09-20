/* function isPalindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]+/g,'');
    const reversedStr = formattedStr.split('').reverse().join('');
    return formattedStr === reversedStr;
} */

function isPalindrome(str) {
    const formattedStr = removeNonAlpNum(str.toLowerCase());
    const revStr = reverseStr(formattedStr);
    return formattedStr === revStr;
}

function removeNonAlpNum(str) {
    let formattedStr = '';
    for (let i = 0 ; i<str.length; i++) {
        const char = str[i];
        if (isAlphaNum(char)) {
                formattedStr += char
        }
    }
    return formattedStr;
}

function isAlphaNum(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <=57) || (code >= 97 && code <= 122)
    )
}

function reverseStr(str) {
    let rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

module.exports = isPalindrome;
