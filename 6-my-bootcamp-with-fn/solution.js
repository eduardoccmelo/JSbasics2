function logClass(alumniList) {
  if (alumniList.length === 0) {
    console.log("This array is empty");
  } else {
    for (let i = 0; i < alumniList.length; i++) {
      console.log(alumniList[i]);
    }
  }
}

let students = logClass([
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
]);

let australians = logClass([]);

let germans = logClass([
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
]);

let russians = logClass([]);

let brazilians = logClass(["Eduardo"]);
