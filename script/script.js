"use strict";
const chrs = ["2", "4"],
  result = [10, 20, 30, 40, 50].filter((e) => chrs.includes(e.toString()[0]));
console.log(result);

let n = 100;
for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j !== i) {
      break;
    } else {
      console.log(i);
      break;
    }
  }
}
