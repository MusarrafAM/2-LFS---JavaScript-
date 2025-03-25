// const fruits = [
//   { name: "apple", color: "red", calories: 80 },
//   { name: "orange", color: "orange", calories: 60 },
//   { name: "banana", color: "yellow", calories: 180 },
//   { name: "pineapple", color: "yellow", calories: 37 },
// ];

//! Do this again
// get max calorie fruit
// get total calories
// ----------------
// sort by price
// let items = [
//     { name: "Apple", price: 30 },
//     { name: "Banana", price: 20 },
//     { name: "Orange", price: 25 },
//   ];

// ---------------------------------------
//! Make the exucution in order 1,2,3,4 then all taks executed using callbackhell. and also in async await try catch method.
// function task1(){
//     setTimeout(() => {
//         console.log("Task 1 Complete");
//     }, 2000);
// }

// function task2(){
//     setTimeout(() => {
//         console.log("Task 2 Complete");
//     }, 1000);
// }

// function task3(){
//     setTimeout(() => {
//         console.log("Task 3 Complete");
//     }, 3000);
// }

// function task4(){
//     setTimeout(() => {
//         console.log("Task 4 Complete");
//     }, 1500);
// }

// task1()
// task2()
// task3()
// task4()
// console.log("All Task Completed");

// ---------------------------------------

//! Make the below code DRY (don't repeat yourself). By using Higher order functions. EP 18 answer.
// const radius = [3, 1, 2, 4];

// const calculateArea = (radius) => {
//   const area = [];

//   for (let i = 0; i < radius.length; i++) {
//     area.push(Math.PI * radius[i] * radius[i]);
//   }

//   return area;
// };

// const calculateCircumference = (radius) => {
//   const Circumference = [];

//   for (let i = 0; i < radius.length; i++) {
//     Circumference.push(2 * Math.PI * radius[i]);
//   }

//   return Circumference;
// };

// const calculateDiameter = (radius) => {
//   const Diameter = [];

//   for (let i = 0; i < radius.length; i++) {
//     Diameter.push(2 * radius[i]);
//   }

//   return Diameter;
// };

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));
// console.log(calculateDiameter(radius));

// ---------------------------------------

//! this is from ep 19.

// const users = [
//   { firstName: "Muhammed", lastName: "Musarraf", age: 26 },
//   { firstName: "Muhammed", lastName: "Musa", age: 26 },
//   { firstName: "Muhammed", lastName: "Ihzan", age: 22 },
//   { firstName: "Muhammed", lastName: "sahee", age: 29 },
//   { firstName: "Muhammed", Zalahi: "Musarraf", age: 31 },
// ];

// list of full names

//! Very important question. should try this in both methods.
// last name of all people whose age is less than 30, try this with 2 methods 1 = map, filter. method 2 = reduce

//! Very Very important question.
// what are different age and how many people have that same age  eg = {26:2, 22:1}
