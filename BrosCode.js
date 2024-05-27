// console.log("Musarraf");

// window.alert("This is an alert");

// let name = "Muasrraf";
// let age = 25;
// let student = true;

// document.getElementById("p1").textContent = name;

// console.log(`Hi my name is ${name} nad ${age} years old`);
// console.log(typeof age);

// let userName =  window.prompt("Enter ur name: ")
// console.log(`Your name is ${userName}`);

// function submit(){
//     document.getElementById("p1").textContent = document.getElementById("myText").value
// }

// !slice
// const email = "Musarraf@gmail.com"

// let username = email.slice(0, email.indexOf("@"))
// console.log(username);

// Method Chaining
// let username  = " musarrAf "
// let updatedUsername =  username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase()

// console.log(updatedUsername);

// !Spread operator

// const x = [2, 4, 6, 8];
// const y = [10, 12, 16];
// const a = [...x , ...y, 18, 20];
// console.log(a);

// let name = "Musarraf"
// let letters = [...name].join("-")
// console.log(letters);

// !Callback
// EG -1
// hello(goodbye);

// function hello(Callback) {
//   console.log("hello");
//   Callback();
// }

// function goodbye() {
//   console.log("Goodbye");
// }

// EG -2    --------------

// sum(displayOutput, 4, 6)

// function sum(Callback, n1, n2){
//     let total = n1 + n2
//     Callback(total)
// }

// function displayOutput(total){
//     console.log(total);
// }

// !forEach
// ForEach() =  method used to iterate over the elements of
//  an array and apply a specified function (callback) To each element. – Important learn about this more.

// EG - 1

// let numbers = [1, 2, 3, 4, 5 ]

// numbers.forEach(display); //display is a callback function

// function display(elements){
//     console.log(elements);
// }

// EG - 2
// let fruits = ["apple", "balana", "orange", "coconut"]

// fruits.forEach(capitalize) // capitalize is a callback function here
// fruits.forEach(display); //display is a callback function

// function capitalize(element, index, array){   //element, index, array = these 3 are provided when using forEach
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1)
// }

// function display(elements){
//     console.log(elements);
// }

// !Map
// EG - 1
// const numbers = [1, 2, 3, 4, 5]
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// function square(element){
//     return Math.pow(element, 2)
// }

// function cube(element){
//     return Math.pow(element, 3)
// }

// console.log(squares);
// console.log(cubes);

// EG - 2 (Practical example)
// const dates = ["2024-1-10", "2024-2-20", "2024-3-30"];
// const formatedDates = dates.map(formatDate);

// function formatDate(element) {
//     let parts = element.split('-')
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }

// console.log(formatedDates);

// !filter

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);

// function isEven(element) {
//   return element % 2 === 0; // only true will be return
// }

// console.log(evenNums);

// !Reduce
// EG - 1
// const prices = [10, 20, 40, 60, 80]
// const total = prices.reduce(sum)

// console.log(total)

// function sum(previous ,next){   //i have renamed the accumulator and elements here.
//     return previous + next
// }

// EG - 2

// const grades = [75, 50, 90, 80, 65, 95]

// const max = grades.reduce(getMax)
// console.log(max);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element)
// }

// !Arrow FUnction
// Eg - 1
// const greetings = (name, age) => `Hello Welcome ${name} \nYou are ${age}`

// console.log(greetings("Musarraf", 24));
// console.log(greetings("Ihzan", 23));

// Eg - 2 setTimeout

// setTimeout(greeting, 3000);
// function greeting() {
//     console.log("hi Welcome this is using callback");
// }

// setTimeout(() => {
//     console.log("hi Welcome this is using function expression");
// }, 4000);

// !OOP
// const person = {
//     name:"Musarraf",
//     age:24,
//     greet: function(){  //method
//         console.log(`Welcome ${this.name}`);
//     }
// }

// console.log(person.age);
// person.greet()

// !Constructor in OOP
// function Car(make, model, year, color){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = function(){console.log(`you drive  the ${this.model}`);}
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red")

// console.log(car1.make);
// car1.drive()

// !class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Inside class No need to use the function keyword to create methods
//   greet(city) {
//     console.log(
//       `Welcome to ${city} city ${this.name} You are ${this.age} years old.`
//     );
//   }
// }
// person1 = new Person("Musarraf", 24);

// person1.greet("Colombo");

// !static Keyword

// static = keyword that defines properties or methods that belong to a class itself rather than the object created from that class.
//          (class owns anything static, not the object)

// EG - 01
// class MathUtil {
//   static PI = 3.14159;

//   static getCircumference(radius){
//     return 2 * this.PI * radius
//   }
// }

// console.log(MathUtil.PI); //To acces static attribute or methods we dont need to create an instance of an object.
// //                          can directly use it from the object itself.
// console.log(MathUtil.getCircumference(10));

// EG - 02;

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

// }

// const user1 = new User("Musarraf")
// const user2 = new User("Bro")
// const user3 = new User("Kratose")

// console.log(user1.username);
// console.log(User.userCount);

// !Super   Very importand consept
// super = keyword used in classes to call the constructor or acces the properties and methods of a parent (superclass)
// this = this object
// super = the parent

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`The ${this.name} moves at the speed of ${speed}mph`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`this ${this.name} can run`);
//     super.move(this.runSpeed)
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`this ${this.name} can swim`);
//     super.move(this.swimSpeed)
//   }
// }

// let rabbit1 = new Rabbit("rabbit", 1, 25);
// let fish1 = new Fish("fish", 2, 12);

// console.log(rabbit1.name, rabbit1.age, rabbit1.runSpeed);
// console.log(fish1.name, fish1.age, fish1.swimSpeed);

// rabbit1.run();
// fish1.swim();

// !getters and setters
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstName = newFirstName; // Here _firstName is to indicate other developers its a private property we should not touch it.
//     } else {
//       console.error("First name must be a non-empty string");
//     }
//   }

//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastName = newLastName; // Here _firstName is to indicate other developers its a private property we should not touch it.
//     } else {
//       console.error("Last name must be a non-empty string");
//     }
//   }

//   set age(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this._age = newAge;
//     }else{
//         console.error("Age must be a non-negative number");
//     }
//   }

//   get firstName(){
//     return this._firstName;
//   }

//   get lastName(){
//     return this._lastName;
//   }

//   get age(){
//     return this._age;
//   }

//   get fullName(){
//     return this._firstName  + " " +  this._lastName;
//   }

// }

// const person1 = new Person("Muhammed", "Musarraf", 24); //to check give number for name and age as negative number.

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);

// !Destructuring
// destructuring = extract values from arrays and objects then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// example - 1
// Assign Array elements to variables
// let colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColor] = colors; //Here ...extraColour is rest parameter

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColor);

// example - 2
// Extract Values from objects

// const person1 = {
//   fName: "Muhammed",
//   lName: "Musarraf",
//   age: 24,
//   job: "Software Engineer",
// };

// const person2 = {
//   fName: "Muhammed",
//   lName: "Musha",
//   age: 30,
//   job: "Software Engineer professional",
// };

// const person3 = {
//   fName: "james",
//   lName: "Bond",
//   age: 30,
// };

// const { fName, lName, age, job = "Looking for Job" } = person1; //here Looking for Job"  is the default value if someone doenst have a job.
// console.log(fName);
// console.log(lName);
// console.log(age);
// console.log(job);

// example - 3
// !Destructure in function parameters = Important

// function displayPerson({ fName, lName, age, job }) {
//   // we can give defalut values for this as well.
//   console.log(`it is ${fName} ${lName}, ${age} years old, a ${job}.`);
// }

// const person1 = {
//   fName: "Muhammed",
//   lName: "Musarraf",
//   age: 24,
//   job: "Software Engineer",
// };

// const person2 = {
//   fName: "Muhammed",
//   lName: "Musha",
//   age: 30,
//   job: "Software Engineer professional",
// };

// !Nested Objects

// class Person{
//   constructor(name, age, ...address){ // this is rest parameter
//     this.name = name
//     this.age = age
//     this.address = new Address(...address)

//   }
// }

// class Address {
//   constructor(street, city, country){
//     this.street = street
//     this.city = city
//     this.country = country
//   }
// }

// const person1 = new Person("Musarraf", 24, "446/1", "Colombo road", "Colombo-02")

// console.log(person1.address);

// !array of objects
// const fruits = [
//   { name: "apple", color: "red", calories: 80 },
//   { name: "orange", color: "orange", calories: 60 },
//   { name: "banana", color: "yellow", calories: 180 },
//   { name: "pinapple", color: "yellow", calories: 37 },
// ];

// !Important

// fruits.forEach(fruit => console.log(fruit.color))

// const fruitNames = fruits.map(fruit => fruit.name)
// console.log(fruitNames);

// const yellowFruit = fruits.filter(fruit => fruit.color === "yellow")
// console.log(yellowFruit);

// accumulator, element = renamed into max, fruit)
// const maxFruit = fruits.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );
// console.log(maxFruit);

// !Sorting
// const fruits = ["apple", "orange", "banana", "coconut"];
// const nums = [1, 4, 2, 7, 0, 3, 6, 8, 5];
// fruits.sort();
// nums.sort();
// console.log(fruits);
// console.log(nums);

// let items = [
//   { name: "Apple", price: 30 },
//   { name: "Banana", price: 20 },
//   { name: "Orange", price: 25 }
// ];

// items.sort((a, b) => a.price - b.price); // sorting by price
// console.log(items);

// let numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b); // ascending order
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// let numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => b - a); // descending order
// console.log(numbers); // Output: [5, 4, 3, 2, 1]

// !Closure

// closure = a function defined inside of another function, the inner function has acces to the variables and scope of the outer function,
//           Allow for private variables and state maintenance.  used frequently in JS frameworks: React, Vue, Anguler

// EG - 01

// function outer(){
//     let message = "Hello"

//     function inner(){
//         console.log(message);
//     }

//     inner()
// }

// outer()

// EG - 02 = state maintanatce with private variable

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Count Increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }

//   return { increment, getCount }; // shorter version of this =  return {increment: increment}
// }

// const conter = createCounter();
// conter.increment();
// conter.increment();
// console.log(`The count is ${conter.getCount()}`);

// !setTimeout

// setTimeout(()=>{
//     window.alert("Hello")
// }, 3000)

// !asynchronous
// synchronous = Executes line by line consecutively in a sequential manner Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be perforemed concurrently without waiting.
// doesn't block the execution flow and allows the program to continue
// (I/O operations, network requests, fetching data)
// handled with : Callbacjs, Promisses, Async/Await

// EG - 01
// setTimeout(() => {
//     console.log("Task 1");
// }, 3000);

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// EG - 02
// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }

// // now it will wait for tast1 to complete to execute next tasks (this example we used callback)
// func1(func2);

// Error
// error = An object that is created to represent a problem that occurs
// can use try catch finally(optional)
// if we handle the error properly our program reaches the end without crash

// ex - 01
// consele.log("Hello")
// console.log("Programe Will not reaches this code - End");

// ex - 02
// try {
//   cenzsele.log("Hello");
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("This will always executes");
// }

// console.log("when hanlde error properly Programe reaches the end");

// // !ex - 03

// try {
//   const divident = Number(window.prompt("Enter a divident: "));
//   const divisor = Number(window.prompt("Enter a divisor: "));

//   if (divisor == 0) {
//     throw new Error("You can't divide by zero!"); // Create our our custorm error object
//   }
//   if (isNaN(divident) || isNaN(divisor)) {
//     throw new Error("Values must be a number");
//   }

//   const result = divident / divisor;
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

// console.log("when hanlde error properly Programe reaches the end");

//! Callback Hell

//! the below code is synchronous
// function task1(){
//     console.log("Task 1 Complete");
// }

// function task2(){
//     console.log("Task 2 Complete");
// }

// function task3(){
//     console.log("Task 3 Complete");
// }

// function task4(){
//     console.log("Task 4 Complete");
// }

// task1()
// task2()
// task3()
// task4()
// console.log("All Task Completed");

//! the below code contains Asynchronous functions
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

//! To make this work in order we can use callback OR PRomisses OR async/await
//! Below is an example for the callback hell.

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 Complete");
//     callback();
//   }, 2000);
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 Complete");
//     callback();
//   }, 1000);
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 Complete");
//     callback();
//   }, 3000);
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task 4 Complete");
//     callback();
//   }, 1500);
// }

// // callbackHell
// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("All Task Completed");
//       });
//     });
//   });
// });

//! Promises
// Promise = An object that manages asynchronous operations.
// Wrap a Promise Object around { asynchronous code }
// “ I promise to return a value ”
// PENDING ->  RESOLVED or REJECTED
// new Promise( ( resolve, reject ) => { asynchronous code } )

// function task1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task1Completed = true;
//       if (task1Completed) {
//         resolve("Task 1 Complete");
//       } else {
//         reject("Task 1 Incomplete");
//       }
//     }, 2000);
//   });
// }

// function task2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task2Completed = true;
//       if (task2Completed) {
//         resolve("Task 2 Complete");
//       } else {
//         reject("Task 2 Incomplete");
//       }
//     }, 2000);
//   });
// }

// function task3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task3Completed = false;
//       if (task3Completed) {
//         resolve("Task 3 Complete");
//       } else {
//         reject("Task 3 Incomplete");
//       }
//     }, 2000);
//   });
// }

// function task4() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task4Completed = ture;
//       if (task4Completed) {
//         resolve("Task 4 Complete");
//       } else {
//         reject("Task 4 Incomplete");
//       }
//     }, 2000);
//   });
// }

// task1()
//   .then((value) => {
//     console.log(value);
//     return task2();
//   })
//   .then((value) => {
//     console.log(value);
//     return task3();
//   })
//   .then((value) => {
//     console.log(value);
//     return task4();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You finished all the tasks");
//   })
//   .catch((error) => console.error(error));

//! Async/Await
// Async/Await = Async makes a function return a Promise.
// 		 Await makes an async function wait for a promise.

//* Allows you write asynchronous code in synchronous manner
// Async doesn’t have resolve or reject parameters.
// Everything after Await is placed in an Even queue

// function task1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task1Completed = true;
//       if (task1Completed) {
//         resolve("Task 1 Complete");
//       } else {
//         reject("Task 1 Incomplete");
//       }
//     }, 2000);
//   });
// }

// function task2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task2Completed = true;
//       if (task2Completed) {
//         resolve("Task 2 Complete");
//       } else {
//         reject("Task 2 Incomplete");
//       }
//     }, 2000);
//   });
// }

// function task3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task3Completed = false;
//       if (task3Completed) {
//         resolve("Task 3 Complete");
//       } else {
//         reject("Task 3 Incomplete");
//       }
//     }, 2000);
//   });
// }

// function task4() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const task4Completed = true;
//       if (task4Completed) {
//         resolve("Task 4 Complete");
//       } else {
//         reject("Task 4 Incomplete");
//       }
//     }, 2000);
//   });
// }

// //! Important
// async function doTasks() {
//   try {
//     const task1Result = await task1();
//     console.log(task1Result);

//     const task2Result = await task2();
//     console.log(task2Result);

//     const task3Result = await task3();
//     console.log(task3Result);

//     const task4Result = await task4();
//     console.log(task4Result);

//     console.log("You complete All the tasks");
//   } catch (error) {
//     console.error(error);
//   }
// }

// doTasks();

// JSON = (JavaScript Object Notation) data-interchange format Used for exchanging data between a server and a web application
// JSON files = { key:value } OR [value1, value2, value3]  OR Combination of both object and arrays

// JSON.stringify() = converts a JS object into a JSON string
// JSON.parse()  = converts a JSON string into a JS object

//! Fetch
// Fetch = function used for making HTTP requests to fetch resources. (JSON style data, images, files)
// Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
// Fetch( url, {options} )   =   optios  = {methods : “GET”}

// using promise method
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu") //response.json() = change json data into javascript object
//   .then((response) => response.json()) //fetch returns a promise so we used .then
//   .then((data) => console.log(data)) // .json will also returns a promise so we use .then here as well
//   .catch((error) => console.error(error));

// same above with error throwing and handling
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// ! VERY IMPORTANT  using async/await

// async function fetchData() {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

//     // Once an error is thrown, the execution of the try block stops, and the control is transferred to the catch block.

//     if (!response.ok) {
//       throw new Error("Could not fetch resourse");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();

//! Good =  Code for pokemon image generator
// async function fetchData() {
//   try {
//     const pokemonName = document
//       .getElementById("pokemonName")
//       .value.toLowerCase();

//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );

//     //   Once an error is thrown, the execution of the try block stops, and the control is transferred to the catch block.

//     if (!response.ok) {
//       throw new Error("Could not fetch resourse");
//     }

//     const data = await response.json();
//     const pokimonSprite = data.sprites.front_default;

//     const imageElement = document.getElementById("pokimonSprite");
//     imageElement.src = pokimonSprite;
//     imageElement.style.display = "block";
//     console.log(pokimonSprite);
//   } catch (error) {
//     console.error(error);
//   }
// }
