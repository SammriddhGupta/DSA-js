/* Return sum of squares of even numbers in an array */

function sumOfEvenSquares(arr) {
    const evenSqSum = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((sum, squared) => sum + squared, 0)

    return evenSqSum;

}

module.exports = sumOfEvenSquares;
