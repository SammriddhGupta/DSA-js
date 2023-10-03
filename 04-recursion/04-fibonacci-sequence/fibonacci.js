// given number is actually index in the fibo series, and we want to return number at that index in the fibo series 
function fibonacci(num) {
    if (num < 2) {
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
