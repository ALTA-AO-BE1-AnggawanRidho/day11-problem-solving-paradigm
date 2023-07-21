// Problem 2 - Simple Equations

function simpleEquations(a, b, c) {
    for (let x = 1; x <= a; x++) {
        for (let y = x + 1; y <= a; y++) {
            const z = a - x - y;
            if (x * y * z === b && x ** 2 + y ** 2 + z ** 2 === c) {
                return [x, y, z];
            }
        }
    }
    return null; // If no solution is found within the given constraints
}

// Examples
console.log(simpleEquations(1, 2, 3)); // Output: null (No solution)
console.log(simpleEquations(6, 6, 14)); // Output: [1, 2, 3]