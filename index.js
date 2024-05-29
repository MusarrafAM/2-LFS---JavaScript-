// ---Ep.3 - Hoisting in JavaScript 🔥(variables & functions) ---

// greet(); //Fine
// console.log(x); //undefined
// console.log(greet); // it will print the entire function.

// var x = 7; //if removed this line you will get not defined error.

// function greet() {
//   console.log("Namaste Js");
// }

// greet() //Fine
// console.log(x); //Fine
// console.log(greet); // it will print the entire function.

// see the index.js

// ---Ep.4 - How functions work in JS ❤️ & Variable Environment ---

// see the index.js

var x = 1;

console.log(this.x); // after reading ep 5. this one line will make sence.
console.log(window.x); // after reading ep 5. this one line will make sence.
console.log(x);
a();
b();

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
