let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [];

function calculateSummation(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

alert(`Your summation is: ${calculateSummation(array1)}`);
alert(`Your summation is: ${calculateSummation(array2)}`);
