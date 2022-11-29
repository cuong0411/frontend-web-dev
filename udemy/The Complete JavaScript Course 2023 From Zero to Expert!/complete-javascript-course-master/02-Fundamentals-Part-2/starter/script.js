"use strict";

const numbers = [4, 10, 5, 7, 13, 20];

// arrow function
const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sumArr(numbers));
