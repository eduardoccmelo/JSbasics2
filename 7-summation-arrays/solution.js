let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [1, 2];
let array3 = [];

function calculateSummation(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(calculateSummation(array1));
console.log(calculateSummation(array2));
console.log(calculateSummation(array3));
