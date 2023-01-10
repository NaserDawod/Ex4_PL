function fibonacci() {
    const cache = {};
    function calcFibonacci(n) {
        console.log(cache)
        if (cache[n]) {
            return cache[n];
        }
        if (n === 0) {
            return 0;
        }
        if (n === 1 || n === 2) {
            return 1;
        }
        cache[n] = calcFibonacci(n - 1) + calcFibonacci(n - 2);
        return cache[n];
    }
    return calcFibonacci;
}

const fib = fibonacci();