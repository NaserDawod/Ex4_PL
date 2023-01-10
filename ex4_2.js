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



