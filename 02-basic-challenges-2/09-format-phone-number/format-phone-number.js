/* function formatPhoneNumber(numbers) {
    const areaCode = numbers.slice(0,3).join('');
    const prefix = numbers.slice(3,6).join('');
    const lineNum = numbers.slice(6).join('');

    return `(${areaCode}) ${prefix}-${lineNum}`;
} */

function formatPhoneNumber(numbers) {
    const formatted = numbers.join('');

    return `(${formatted.substring(0,3)}) ${formatted.substring(3,6)}-${formatted.substring(6)}`;
}

module.exports = formatPhoneNumber;
