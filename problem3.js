// Problem 3 - Dragon of Loowater

function dragonOfLoowater(dragonHead, knightHeight) {
    dragonHead.sort((a, b) => a - b);
    knightHeight.sort((a, b) => a - b);

    let totalHeight = 0;
    let knightIndex = 0;

    for (let i = 0; i < dragonHead.length; i++) {

        while (knightIndex < knightHeight.length && dragonHead[i] > knightHeight[knightIndex]) {
            knightIndex++;
        }

        if (knightIndex === knightHeight.length) {
            return "knight fall";
        }

        totalHeight += knightHeight[knightIndex];
        knightIndex++;
    }

    return totalHeight;
}
  
// Test cases
console.log(dragonOfLoowater([5, 4], [7, 8, 4]));    // Output: 11
console.log(dragonOfLoowater([5, 10], [5]));         // Output: "knight fall"
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // Output: "knight fall"
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // Output: 10
