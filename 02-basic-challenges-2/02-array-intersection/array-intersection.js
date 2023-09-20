function arrayIntersection(arr1, arr2) {
    const comm = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !comm.includes(arr1[i])) {
            comm.push(arr1[i]);
        }
    }
    return comm;
}

// method 2 with a set
/* function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const comm = [];
    for (let num of arr2) {
        if(set1.has(num)) {
            comm.push(num);
        }
    }
    return comm;
} */

module.exports = arrayIntersection;
