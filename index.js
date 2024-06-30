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

// ---Ep.10 - Closures in JS 🔥 ---

// very basic closure - here function y forms a closure with var a from function x.
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

//! Real Example of closure
// function x() {
//   var a = 5;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x(); // in this line function x, it's EC will deleted. and the function y and the closures will be passed here
// // thats how even the function x deleted(var a as well) it remmbers the value of a using closures

// z();

// eg - 2

// function z() {
//   var b = 10;
//   function x() {
//     var a = 5;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

//function y will create clousere with var a and var b

// setTimeout + Closures Interview Question 🔥
// Just watch the video again really fast

// basic
// function x() {
//   var i = 5;
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
//   console.log("Hello JS");
// }

// x()

// initially Hello JS will be printed then after 1 sec value of i will be printed

// The famouse question Clousers + SetTimeout
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello JS");
}
x();

// JS dont wait for anything so, it will iterate through the loop ,for setTimeout function it will set the callback
// function as function and set the timer and save those function away it will do the same for the rest of the iteration
// after iteration it will log the HEllo js, so now in the saved funcitons when the timer finished that function will be
// called / Put on the call stack and executes.when the first function completes it time the value of i already 6 so
// all the i will be show the 6 as printed value. (if we just change the var to let the bugg will be fixed but if the
// interviewr asked to do using with the var u have to do the below method.(Closures Mehtod))

// final annswer using cosures
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

x();

// In this code, the `close` function is used to encapsulate the `setTimeout` function. This encapsulation ensures that
// each `setTimeout` callback receives its own copy of the `i` variable, reflecting the intended behavior.

// When `close(i)` is called inside the loop, it passes the current value of `i` to `setTimeout`, which then
// logs `i` after `i * 1000` milliseconds. This setup works because each `close` call captures the
// specific `i` value at that moment due to closures in JavaScript.

// Therefore, by using the `close` function to enclose the `setTimeout`, we ensure that each timeout callback
// displays the correct value of `i` at the time `close` was invoked, demonstrating the power of closures to
// manage variable scope effectively in asynchronous JavaScript operations.
