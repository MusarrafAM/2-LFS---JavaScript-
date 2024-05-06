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

function displayPerson({ fName, lName, age, job }) {
  // we can give defalut values for this as well.
  console.log(`it is ${fName} ${lName}, ${age} years old, a ${job}.`);
}

const person1 = {
  fName: "Muhammed",
  lName: "Musarraf",
  age: 24,
  job: "Software Engineer",
};

const person2 = {
  fName: "Muhammed",
  lName: "Musha",
  age: 30,
  job: "Software Engineer professional",
};
