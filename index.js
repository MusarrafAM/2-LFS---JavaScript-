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

// ---Ep.4 - How functions work in JS ❤️ & Variable Environment ---

// var x = 1;

// console.log(this.x); // after reading ep 5. this one line will make sence.
// console.log(window.x); // after reading ep 5. this one line will make sence.
// console.log(x);
// a();
// b();

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// ---Ep.7 - The Scope Chain, 🔥Scope & Lexical Environment ---

// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// var b = 10;
// a();

// ---Ep.9 - BLOCK SCOPE & Shadowing in JS 🔥 ----

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a); // fine
//   console.log(c); // fine
//   console.log(b); // fine
// }

// console.log(a); // fine
// console.log(b); //Error
// console.log(c); //Error
// let and const are block scoped and var is function scoped

// Shadowing (Behavior in var)
// var a = 100;
// {
//   var a = 10;
//   console.log(a); //this gives 10
// }
// console.log(a); //this also gives 10 this is called shadowing.

// Shadowing (Behavior in let)

// let a = 100;
// {
//   let a = 10;
//   console.log(a); //this gives 10
// }
// console.log(a); //this gives 100.

// shadowing happens in block and functions
// let a = 100;
// function b() {
//   let a = 10;
//   console.log(a); //this gives 10
// }
// b()
// console.log(a); //this gives 100.

// var a = 100;
// {
//   let a = 10;
//   console.log(a);
// }
// console.log(a);

// Illegal Shadowing
// let a = 100;  // same apply if i put const here.
// {
//   var a = 10;
//   console.log(a);
// }
// console.log(a);



var a = 100;
{
  let a = 10;
  console.log(a);
}
console.log(a);