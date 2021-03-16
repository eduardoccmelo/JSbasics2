let userName1 = prompt("Type your name");
let userName2 = prompt("Type your name");
let userName3 = prompt("Type your name");

const greet = (userName) => {
  if (userName === null) {
    userName = "Mr. Nobody";
  }
  return `Hello ${userName}`;
};

console.log(greet(userName1));
console.log(greet(userName2));
console.log(greet(userName3));
