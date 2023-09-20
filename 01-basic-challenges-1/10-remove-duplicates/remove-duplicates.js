function removeDuplicates(arr) {
    const uniqarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqarr.includes(arr[i]))
            uniqarr.push(arr[i]);
    }
    return uniqarr;
}

// shorter method
/* 
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
 */
module.exports = removeDuplicates;
