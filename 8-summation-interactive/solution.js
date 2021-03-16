let intro = confirm("Do you wanna start?");
let numbers = [];

while (intro !== false) {
  let number = Number(prompt("Add a number"));
  if (!number) {
    break;
  } else {
    numbers.push(number);
  }
}

function calculateSummation(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

alert(`Your summation is: ${calculateSummation(numbers)}`);
