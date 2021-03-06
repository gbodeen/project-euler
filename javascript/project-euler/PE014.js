/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 
10 terms. Although it has not been proved yet (Collatz Problem), it is thought 
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

class PE014 {
  collatz(n) {
    return (n & 1) ? (3 * n + 1) : (n / 2);
  }

  memoizeCountCollatz(n) {
    const collatz = this.collatz;
    const memos = {};
    function countCollatz(n) {
      if (n === 1) return 1;
      if (memos[n]) return memos[n];
      const result = 1 + countCollatz(collatz(n));
      memos[n] = result;
      return result;
    }
    return countCollatz;
  }

  maxChain(ceiling) {
    const countCollatz = this.memoizeCountCollatz();
    let start, current, max = 0;
    for (let i = 1; i < ceiling; i++) {
      current = countCollatz(i);
      if (current > max) {
        max = current;
        start = i;
      }
    }
    return start;
  }
}


// tests
const test = new PE014();
console.log(test.maxChain(2)); // 1
console.log(test.maxChain(10)); // 9
console.log(test.maxChain(100)); // 97
console.log(test.maxChain(1000000)); // 837799