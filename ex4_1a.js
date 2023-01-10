function factorial() {
    const cache = {};
    function calcFactorial(n) {
        if (cache[n]) {
            return cache[n];
        }
        if (n === 0 || n === 1) 
            return 1;
        cache[n] = n * calcFactorial(n - 1);
        return cache[n];
    }
    return calcFactorial;
}

const fact = factorial();
