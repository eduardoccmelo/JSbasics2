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

function calculateSummation(sum) {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  }
  return total;
}

if (numbers.length !== 0) {
  alert(`Your summation is: ${calculateSummation(numbers)}`);
  console.log(`Your summation is: ${calculateSummation(numbers)}`);
} else {
  alert("You don't have any number for the summation");
  console.log("You don't have any number for the summation");
}
