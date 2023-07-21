// Problem 1 - Frog

function frog(jumps) {
    // your code here
    const n = jumps.length;
    const dp = new Array(n).fill(Number.POSITIVE_INFINITY);
    dp[0] = 0;

    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[i], dp[i - 1] + Math.abs(jumps[i] - jumps[i - 1]));
        if (i > 1) {
            dp[i] = Math.min(dp[i], dp[i - 2] + Math.abs(jumps[i] - jumps[i - 2]));
        }
    }

    return dp[n - 1];
}


console.log(frog([10, 30, 40, 20])) // 30
console.log(frog([30, 10, 60, 10, 60, 50])) // 40