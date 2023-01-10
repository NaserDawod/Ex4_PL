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

function factorial(n) {
    if (n === 0 || n === 1) 
        return 1;
    return n * calcFactorial(n - 1);
}

const fact = memoize(factorial)