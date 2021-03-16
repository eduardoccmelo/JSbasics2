function isEmpryString(string) {
  if (string === "") {
    return true;
  } else {
    return false;
  }
}
// console.log(isEmpryString(""));
// console.log(isEmpryString("String"));

function isIncluded(a, b, c) {
  if (a.includes(c) && b.includes(c)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isIncluded("bus", "bus", "us"));
// console.log(isIncluded("house", "cat", "us"));

function firstCharacter(a) {
  return a[0];
}
// console.log(firstCharacter("Eduardo"));

function lastCharacter(a) {
  return a[a.length - 1];
}
// console.log(lastCharacter("Eduardo"));

function capitalize(a) {
  return a[0].toUpperCase() + a.slice(1);
}
// console.log(capitalize("eduardo"));
