function memoize(f) {
    cache = {}
    return function(x) {
        if (cache[x]) {
            return cache[x];
        } else {
            const result = f(x);
            cache[x] = result;
            return result;
        }
    }
}

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return calcFibonacci(n - 1) + calcFibonacci(n - 2);
}

const fib = memoize(fibonacci)
