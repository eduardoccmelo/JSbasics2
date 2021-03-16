let alumniList = [
  "Namir",
  "Marwin",
  "Martin",
  "Eduardo",
  "Hugh",
  "Shari",
  "Alex",
  "Rikki",
  "Yvonne",
  "Johan",
  "David",
  "Johannes",
  "Jörg",
  "Sören",
  "Manuel",
  "Phillip",
];

let germans = [
  "Marwin",
  "Shari",
  "Alex",
  "Rikki",
  "Yvonne",
  "David",
  "Johannes",
  "Jörg",
  "Sören",
  "Manuel",
  "Phillip",
];

let brazilians = ["Eduardo"];

let australians = [];

function logClass(arr) {
  if (arr.length === 0) {
    console.log("This array is empty");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(`#${i + 1} ${arr[i]}`);
    }
  }
}

console.log(logClass(alumniList));
console.log(logClass(germans));
console.log(logClass(brazilians));
console.log(logClass(australians));
