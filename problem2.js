// Problem 2 - Simple Equations

function solveXYZ(A, B, C) {
    for (let x = 1; x <= A; x++) {
      for (let y = 1; y <= A; y++) {
        const z = A - x - y;
        if (x * y * z === B && x ** 2 + y ** 2 + z ** 2 === C) {
          return [x, y, z];
        }
      }
    }
    return null; // If no solution is found within the given constraints
}

// Examples
console.log(solveXYZ(1, 2, 3)); // Output: null (No solution)
console.log(solveXYZ(6, 6, 14)); // Output: [1, 2, 3]