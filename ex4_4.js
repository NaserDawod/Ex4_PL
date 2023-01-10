function memoize(f) {
    const cache = {};
    return function() {
        const args = Array.from(arguments);
        let currentLevel = cache;
        for (const arg of args) {
            if (!currentLevel.has(arg)) {
                currentLevel.set(arg, new Map());
            }
            currentLevel = currentLevel.get(arg);
        }
        if (currentLevel.has(null)) {
            return currentLevel.get(null);
        }
        const result = f.apply(null, args);
        currentLevel.set(null, result);
        return result;
    }
}