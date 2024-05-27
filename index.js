// ---Ep.3 - Hoisting in JavaScript 🔥(variables & functions) ---

// greet(); //Fine
// console.log(x); //undefined
// console.log(greet); // it will print the entire function.

var x = 7; //if removed this line you will get not defined error.

function greet() {
  console.log("Namaste Js");
}

greet() //Fine
console.log(x); //Fine
console.log(greet); // it will print the entire function.
