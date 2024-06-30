# 2-LFS---JavaScript- Bros COde and the Akshay Saini's Namaste JavaScript Season - 01

Always put the script tag at the end of the body tag, if js has erroes at least the html will render.

Type converstion = Number(x) OR String(x) OR Boolean(x)

The Keyword const is a little misleading. It does not define a constant value. It defines a constant reference to a value.

Math.trunc = Eliminate decimal value , Math.abs = Change negative into positive

There are lots of string methods in JS Look for it.

Slice() extracts elements into a new array without modifying the original. Splice() changes the contents of the original array.

Spread operator (…) = expands an array into separate elements

Rest parameter (…) = bundles separate elements into an array. (Important consept google if needed)
Callback = a function that is passes as an argument to another function. ( Hey when you are done, call this next )
Used to handle asynchronous operations:

1. Reading a file
2. Network requests
3. Interacting with databases

ForEach() = method used to iterate over the elements of an array and apply a specified function (callback) To each element. Element, index, array are provided – Important learn about this more.

Element, index, array are also provided to the map, filter reduce functions as well.

.map() function is most like the forEact() method, the only difference Is it will return a new array. We use map a lot so understand it fully.

.filter() = creates a new array by filtering out elements.

.reduce() = Reduce the elements of an array into single value. ( Eg = get the total sum of array OR get the highest number from an array.) Reduce function will take 2 parametesrs accumulator, element. = Here accumulator is the previous element and element is the next element.

Function declaration vs function expression easy though get better great understanding of these 2. Changer the below note if need later.

Function declaration is the basic function with name, function expression is without a function name we assign it to a variable OR we pass as an argument to another function without a function name.

Instead of using function declarations then passing a callback we can pass an entire function expression as an arguments to these methods (forEach, map, filter, reduce)

We will be using function expressions a lot (Callbacks, High order functions, Closures, Event Listeners) Make sure you understands it fully.

A better way to write function expressions if it’s a simple function that we only use once is to write it as an Arrow function.

In Objects = property an object has, where methods are functions that the object can perform.

This = reference to the object where this is used. this keyword doesn’t work on arrow functions.

The constructor will automatically called when we initiated a new object.

Class = class is a ES6 feature provides a more structured and clearer way to work with objects compared to traditional constructor functions (class will include a constructor) ex= static keyword, encapsulation, inheritance.

static = keyword that defines properties or methods that belong to a class itself rather than the object created from that class. (class owns anything static, not the object)
To acces static attribute or methods we don’t need to create an instance of an object. can directly use it from the object itself.

Inheritance = allows a new class to inherit properties and methods from existing class (parent -> child) , helps with code reusability. We use extendes keywod in inheritance.

super = keyword used in classes to call the constructor or acces the properties and methods of a parent (superclass)
this = this object
super = the parent

getters = special method that makes a property readable
setters = special method that makes a property writeable
we use getters and setters to validate and modify a value when reading/writing a property. (check example in code)

destructuring = extract values from arrays and objects then assign them to variables in a convenient way
[ ] = to perform array destructuring
{ } = to perform object destructuring

closure = a function defined inside of another function, the inner function has acces to the variables and scope of the outer function,
Allow for private variables and state maintenance. used frequently in JS frameworks: React, Vue, Anguler

setIntervel works like setTimeout except it will call a function repeatedly after the interval time period ( setTimeout only once) eg – setIntervel with 1000ms for digital clock with update cloch callback function.

ES6 modules = An external file that contains reusable code that can be imported into other JavaScript files/ Can contain variables, classes, functions etc…

synchronous = Executes line by line consecutively in a sequential manner Code that waits for an operation to complete.

asynchronous = Allows multiple operations to be perforemed concurrently without waiting.
doesn't block the execution flow and allows the program to continue
(I/O operations, network requests, fetching data)
handled with : Callbacjs, Promisses, Async/Await

error = An object that is created to represent a problem that occurs
try { } = elncose code that might potentially cause an error.
Catch { } = Catch and handle any thrown Errors from try { }
Finally { } = ( optional ) Always executes. Used mostly for cleanup
Ex= close files, close connection, release resourses.
if we handle the error properly our program reaches the end without crash

DOM – Document Object Model.
DOM = JS Object { } that represents the page you see in the web browser and provides you with an API to interact with it. Web browsers construct the DOM when it loads an HTML document, and structure all the elements in a tree-like representation. Javascript can access the DOM to dynamically change the content, structure, and style of a webpage.

Element selectors = Methods used to target and manipulate HTML elements.

1. document.getElementById () == ELEMENT OR NULL
2. document.getElementByClassName () == HTML COLLECTION
3. document.getElementByTagName () == HTML COLLECTION
4. document.querySelector () == FRIST ELEMET (only one) OR NULL
5. document.querySelectorAll () == NODELIST

DOM Navigation

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children

Eg for nextElementSibling :
Const element = document.getelEmentById(“apple”)
Const nextSibling = element.nextElementSibling
nextSibling.style.backgroundColor = “yellow”

ADD OR CHANGE HTML
Step 1 = Create an element  
const newH1 = document.createElement(“h1”);

Step2 = Add attributes/properties
newH1.textContent = “I like Pizza”
newH1.id = “myH1”
newH1.style.color = “green”

step 3 = Append the elemet to the DOM (append or prepend)
document.getElementById(“myH1).append(newH1)

step 4 = Remove The Element if not neded
document.body.removeChild(newH1);

eventListener = Listen for specifit events to create interactive web pages.
mouseEvents = click, mouseover, mouseout
keyEvents = keydown, keyup
.addEventListener(event, callback) // instead callback we can pass annonymos OR arrow function.
Example
Const myBox = document.getElementById(“myBox”)

myBox.addEventListener(“click”, event => {
event.target.style.backgroundColor = “red”;
});
NodeList = Static Collection of HTML elements by (id, class, elements)
Can be created by using querySelectorAll()
Similar to an array, but no (map, filter, reduce) can use foreach.
NodeList won’t update to automatically reflect changes

ClassList = Element property in Javascript used to interact with an element’s list of classes ( css classes ).

Element.classList.add( “classname” )
Element.classList.remove ( )
Element.classList.toggle ( ) = remove if present, Add if not present
Element.classList.replace ( oldCLass, newClass )
Element.classList.contains ( ) == this will return true or false if the element contains the class or not

Eg -1
Const myButton = document,getElementById(“myButton”);
myButton.addEventListener(“mouseover”, event => {
event.target.classList.add(“hover”) //hover is a class in css file.
})

Do the Rock Paper Scissors Programe to Familiar with the concepts of DOM.
See the preview in BrosCode before doing it.

Callback Hell = Situation in javaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read. Callbacks are Old pattern to handle asynchronous functions.
Use Promises + async/await to avoid Callback Hell.

Promise = An object that manages asynchronous operations.
Wrap a Promise Object around { asynchronous code }
“ I promise to return a value ”
PENDING -> RESOLVED or REJECTED
new Promise( ( resolve, reject ) => { asynchronous code } )

if a promise rejects it won’t even try to go to the next promise.

Async/Await = Async makes a function return a Promise.
Await makes an async function wait for a promise.

Allows you write asynchronous code in synchronous manner
Async doesn’t have resolve or reject parameters.
Everything after Await is placed in an Even queue

JSON = (JavaScript Object Notation) data-interchange format Used for exchanging data between a server and a web application JSON files { key:value } OR [value1, value2, value3]

JSON.stringify() = converts a JS object into a JSON string
JSON.parse() = converts a JSON string into a JS object
Fetch = function used for making HTTP requests to fetch resources. (JSON style data, images, files)
Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
Fetch( url, {options} ) = optios = {methods : “GET”}

-----------Bros Code Completed -------------------------------------------------------

-------------------------Namaste JavaScript Season - 01 -------------------------------------------
---Ep.1 - How JavaScript Works 🔥& Execution Context ---

<!--! Important = Everything in Javascript happens inside an Execution Context. -->

we can assum the exectuion context like a big box or a container in which whole js code is executed.
it has 2 componets Memory (variable environment) and code (Thread of Execution), Memory component contains variable and functions as key value pairs, and code component is were whole js code is executed.

pic 1 = execution context.

<!--! Important = JS is a synchronous single-threaded language. -->

To handle async operations we can user callbacks, promisess, or async away methods.
Eg asynch operatiohs - setTimeout, setInterval, Fetch

single threaded = can only execute one command at a time.
synchronous single-threaded = can only execute one command at a time in a specific order. which means it can only go to the next line once the current line has been finished executing.

---Ep.2 - How JavaScript Code is executed? ❤️& Call Stack ---

When we run a js programe a global execution context will be created. this EC(excution context) will be created in 2 phases.
1 = Memory Creation phase. (Memory allocation for the variables and functions inside the global phase)
pic 2 = phase 1

2 = Code Execution Phase. (Assigning values to the variables and if there is any function call(Function invoking) a brand new execution context will be created inside the code are, this new EC will also have 2 parts which are memory and code. so this new EC will go through the creation of the EC which involve 2 phases. after these 2 phases newly created entire Executon will be deleted. and the controll backs to the global EC)

pic = phase 2.1
pic = phase 2.2
pic = phase 2.3
pic = phase 2.4

when JS done with its work, now that the programe is finished, the whole global Execution context will be deleted.

pic = phase 2.5

--The Call Stack--

To handle the execution context creation, deleton, controll JS manages a stack this is called js Callstack.
whenever any js program runs at the bottom of the stack the global execution context (GEC) populated.and whenever function is invoked or new EC is created it will be pushed inside the callstack, and give it conrtoll when the new EC is completed it will be poped out of the callstack and gives controll back to the GEC. when all executions are completed the GEC also will be poped out of the Callstack and the Callstack will be empty.

Pic = Callstack 2.6
Pic = Callstack 2.7

<!--! important = Callstack maintains the order of execution of execution context. -->

callstack is also called as execution controll stack, program stack, control stack, Runtime stack, Machine stack.

---Ep.3 - Hoisting in JavaScript 🔥(variables & functions) ---

when asked what is hoisting in interview first give the typical answer then give the callstack answer after saying if we look at this in the excution context callstack view in js.

<!--! Typical Answer:  -->

Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compile phase before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are treated as if they are declared at the top of the scope.

For example,

console.log(myVar); // undefined
var myVar = 10;

The variable myVar is hoisted to the top of its scope (in this case, the global scope), so console.log(myVar) doesn't cause an error, but myVar is undefined at that point.

Similarly, function declarations are fully hoisted:
javascript Copy code

sayHello(); // "Hello!"

function sayHello() {
console.log("Hello!");
}

Here, sayHello() can be called before its declaration in the code because the function declaration is hoisted to the top.

<!--! Callstack Answer(EC answer): -->

When we look at hoisting from the perspective of the execution context and call stack in JavaScript, each function invocation creates its own execution context. During the creation phase of this execution context, variables declared with var are hoisted and initialized to undefined, while function declarations are fully hoisted with their definition.

To understand the Callstack Answer more watch teh Ep. 3 if need more explaination (2x speed)

---Ep.4 - How functions work in JS ❤️ & Variable Environment ---

Every execution context will maintain its own seperate space.(All EC will have their own seperate memory space which are independatnt of each other.)

Pic = Variable Environment 4.1
Pic = Variable Environment 4.2

---Ep.5 - SHORTEST JS Program 🔥window & this keyword ---

Google chrome's JS engine is V8.
likewise other browsers has their own JS engine

The shortest JS programme is an empty js file. (JS engine will create a GEC. and also JS engine will create a windiow.)
1 = GEC ("this" keword also created along with EC)
2 = window

Whenver a EC is created a "this" keyword is also created along with it.

At global level "this" points to the global object which is window in case of browsers. (this == window)

global space = any code in JS which is not inside a function.

<!--! whenever we create a varialbe or funtions on the global space it will be attached to the window object. -->

eg :
var x = 10;

console.log(window.x)
console.log(this.x)
console.log(x)

whenever we don't put anything infront of x it automatically assumes you are refering to the global space, so at global space this refers to the window so these above 3 will result the same.

---Ep.6 - undefined vs not defined in JS 🤔 ---
undefined is a very special keyword in JS , it is not there in other languages.

undefined is like a place holder until the variable gets it's value after execution.(undefined is not actually empty its taking its memory accordingly.)
not defined is when memory is not allocated to that variable (it's not there in the programe).

var a;
if we never assigned a value to a variable it will be undefined.

<!--! JS is a loosely typed language -->

the type of a variable can be changed along the way.

var a
console.log(a)
a = 10;
console.log(a)
a = "Hello World"
console.log(a)

---Ep.7 - The Scope Chain, 🔥Scope & Lexical Environment ---

 <!--! This is moslty asked in interviews = Scope Chain -->

pic = Scope & Lexical Environment 7.1

<!--! Whenever an execution context is created a lexial environment is also created -->
<!--! Lexical environment is the local memory along with the lexical environment of it's parent. -->

lexical means a heirachy/order.

in below picture orange thing is the refence memory.

pic = Scope & Lexical Environment 7.2

explaination of above picture = here the EC c in its memory it has its local memory and it's parents memory reference, likewise a has its local memory and its parents memory reference which is global EC , GEC has its memory since it has no parent it points to null.

function a() {
c();
function c() {
console.log(b);
}
}

var b = 10;
a();

explaination of above code = after all EC has createted, JS engine will search for b, initially it will search function c local memory, there is not c , then it will move to its lexical parent which is func a , it will search func a local memory, if not it will go to its lexical parent GEC it will search its local memory, since the var b = 10 will aleady in the memory of GEC it will take its value and log it in the console.

scope chain = chanin of all the lexical environment and the parent references is altogether called scope chain.

<!--! so if JS engine doesnt find anything in the local memory it goes one next level of scope chain, if doesnt find in it's local memory it goes next level of the scope chain so this whole chain of lexical environment is known as the scope chain -->

ask chatgpd what is scope chain in javascript and below is the answer :-

In JavaScript, the scope chain refers to the hierarchy of scopes that are created when functions are nested within one another. Understanding the scope chain is crucial for understanding how variables are accessed and resolved in JavaScript.

Here’s how the scope chain works:

1. **Global Scope**: This is the outermost scope that exists in the entire JavaScript program. Variables declared here are accessible from anywhere within the program.

2. **Local Scopes (Function Scope)**: Each function creates its own scope. When a function is invoked, a new scope is created, which becomes the local scope for that function. Any variables declared within this function are scoped to that function and are not accessible from outside unless explicitly returned or referenced.

3. **Nested Scopes**: When functions are nested within one another, each inner function has access to its outer function's scope. This nesting creates a chain of scopes called the scope chain.

4. **Lexical Scoping**: JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position within the source code. This is why the scope chain is based on how functions are nested in the code.

<!--! Very important below explaination about scope chaining -->

<!--! When a variable is referenced within a function, JavaScript first looks in the local scope of that function. If it doesn't find the variable there, it moves one level up the scope chain to the next outer scope and continues until it finds the variable or reaches the global scope. If the variable is not found anywhere in the scope chain, a ReferenceError is thrown. -->

Here’s a basic example to illustrate the scope chain:

```javascript
// Global scope
let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am outer";

  function innerFunction() {
    let innerVar = "I am inner";
    console.log(globalVar); // Accessible, prints: "I am global"
    console.log(outerVar); // Accessible, prints: "I am outer"
    console.log(innerVar); // Accessible, prints: "I am inner"
  }

  innerFunction();
  // console.log(innerVar); // This would cause a ReferenceError because innerVar is not accessible here
}

outerFunction();
// console.log(outerVar); // This would cause a ReferenceError because outerVar is not accessible here
```

In this example:

- `globalVar` is accessible throughout the entire program because it's in the global scope.
- `outerVar` is accessible within `outerFunction` and also within `innerFunction` due to the scope chain.
- `innerVar` is only accessible within `innerFunction` because it's defined only in its local scope.

Understanding the scope chain helps developers write more efficient and bug-free JavaScript code by understanding where variables are defined and where they can be accessed from within nested functions.

Key Differences between Scope Chaining and Closures:

Scope Chaining: Refers to the mechanism of searching for variables up the scope chain hierarchy when they are referenced but not found in the immediate scope.

Closures: Refers to the capability of an inner function to access and persistently hold references to variables from its outer scope(s) even after the outer function has completed execution.

Usage: Scope chaining is a fundamental mechanism used by JavaScript's interpreter to resolve variable references dynamically. Closures are a powerful tool used intentionally by developers to manage function state and data encapsulation.

---Ep.8 - let & const in JS 🔥Temporal Dead Zone ---

Learning Outcomes
Are let & const declarations hoisted in JS?
SyntaxError vs ReferenceError vs TypeError

<!--! Yes, the let and const declarations are also hoisted. but they are hoisted very differently than var declarations.These are in the Temporal Dead Zone for the time being. -->

<!--! TDZ(Temporal Dead Zone) =  The time let or const variable was hoisted and till it is initialized by a value, the time between these 2 is called Temporal Dead Zone-->

if there is any syntax error not even one line of code will run.

<!--! Below Very Important -->

wrong in let (let cannot reclare bit can reassign to variable a later.)
1 (synaxt error)
let a = 10
let a = 20

wrong in cosnt (const cannot redeclare and cannot reassign.)
1 (synax error)
const a;
a = 10

2 (type error)
const a = 10
a = 2

Hoisting Behavior: Both let and const are hoisted, but they reside in a separate memory space from the global execution context. This separation is the cause of the Temporal Dead Zone (TDZ).

Temporal Dead Zone (TDZ): Until a variable declared with let or const is initialized, referencing it results in a TDZ. This zone persists until the declared variable is assigned a value.

With const, declaration and initialization must occur on the same line.
Redeclaring the same variable using let or const is not permitted.
let allows for reassignment of values, while const does not.

Memory Allocation and Access:
Variables declared with let or const cannot be accessed via window or this. (Beacuse its not in the global object which is window)
let and const variables are allocated memory separately from the global execution context.

Error Types:
Reference Error: Occurs when trying to access a variable that hasn't been allocated memory.
Type Error: Arises when attempting to change the type of a variable that's not supposed to change, such as re-initializing a const.
Syntax Error: Results from violating JavaScript syntax rules.
Variable Declaration and Initialization:

Usage Recommendations:
Prioritize const, followed by let, and minimize the use of var.
Using const whenever possible helps prevent errors and promotes immutability.

<!--! Minimizing the TDZ duration by declaring and initializing variables at the top of the code is advisable. -->

---Ep.9 - BLOCK SCOPE & Shadowing in JS 🔥 ---

block and scope are 2 seperat things.

<!--! block = A block (enclosed curly braces) = {} -->

just enclosed curly braces is a valid JS code (Just this = {})
block is also known as Compound Statement.

if(true) console.log("Welcome Single statement)

the above if condition expects single statement and we give sigle statement works fine.
but weh we want to give multiple statements we need to put them into a block(curly braces) to make all statement as a single statement.

if(true){
let a = "Multiple"
console.log(`Welcome Single ${a} statement`)
}

<!--! block scope = What all variables and functions we can access inside a block is called block scope -->

{
var a = 10;
let b = 20;
const c = 30;
}

<!--! let and const are block scoped, their memory allocated to block memory.(not in global.) -->
<!--! we can't acces this let b and const c outside of the block which is why let and const are called block scoped. -->

<!--! but we can acces var a even outside of the scope which is function scope. (var is function scoped.) -->

see index.js

<!--! Shadowing in JS -->

var a = 100;
{
var a = 10;
console.log(a); //this gives 10
}
console.log(a); //this also gives 10 this is called shadowing.

<!--! Since var a allocates memory in global, initially var a = 100 will be stored in global scope ,then inside block var a = 10 will be also stored in global scope so now var a = 100 will be replaced by var a = 10 this is called shadowing.(shadowing in var) -->

let a = 100;
{
let a = 10;
console.log(a); //this gives 10
}
console.log(a); //this gives 100.

<!--! here initially for let a memory will be allocated in a differenct space than the global(not in the global), after inside the block the let a will be allocated and stored in a block scope(Not in global.) ultimatele first let a in a different place than second a which is inside block, for both memory not allocated inside the global scope since it is a let. this is also shadowing.(shadowing in let,  the same will happen for const) -->

let a = 100;
function a{
let a = 10;
console.log(a); //this gives 10
}
console.log(a); //this gives 100.

pic 1 = BLOCK SCOPE & Shadowing in JS 9.1

<!--! Illegal Shadowing = It occurs when a variable declared with let in the global space is shadowed within another block using var, resulting in a syntax error. However, the revese scenario is permissible. which is outsiede var inside block let is permissible. if we put const isnead of let above same things apply. -->

let a = 100;
{
var a = 10;
console.log(a);
}
console.log(a);

this is extra dont confuse (if not get just leave it) = since var is functional scope if we do the above inside a function it is not illegal shadowing in sence of funtion. because var is not crosing its functional scope.

let a = 100;
function x(){
var a = 10;
console.log(a);
}
console.log(a);

<!--! short Notes :- -->

Block :- It is used to combine multiple statement into one statement so that we can use it at those places where javascript expects to have single statement.Refers to the scope of variables or functions within a block of code.
Scope :- scope of a variable or a function is the place where these are accessible.
Block scope :- The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.
Shadowing :- Providing same name to the variable as of those variable which are present in outer scope.
shadowing let or const outside with var inside is illegal shadowing and gives error.

<!--! important -->

chatGpd answer :-
Shadowing: Occurs when a variable declared within a block shares the same name as a variable in the outer scope, effectively hiding the outer variable within that block.
Illegal Shadowing: Refers to cases where a variable declared with let or const in the global scope is shadowed by a var declaration within a block, which is not allowed and would cause a syntax error.

---Ep.10 - Closures in JS 🔥 ---

Closures = Closures are formed when a function, along with its lexical environment, is bundled together.
(A closure is formed by bundling a function with its lexical environment.)

function x() {
var a = 5;
function y() {
console.log(a);
}
return y;
}

var z = x(); // in this line function x, it's EC will deleted. and the function y and the closures will be passed here
// thats how even the function x deleted(var a as well) it remmbers the value of a using closures

z()

when js go to the var z = x() the fuction x is gone (Execution context will be deleted), when returning the function y
its not only return the function but also returning the closure also.

see index.js for some advance closure things.

pic 1 = Closures 10.1
see left bottom inthe picture there will be things called clousers

uses of Closures in JS
Encapsulation, Data Privacy, Function Factories, Callback Functions, Event Handlers, Iterators and Generators Memoization

short Note :-

<!--! Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure and that's where it becomes interesting !! -->

<!--! VERY VERY IMPORTANT Watch these episodes -->
<!--! Watch the Episode 10,11,12 for better understand of closures and the famous question in the closures. -->

--- Ep. 11 - setTimeout + Closures Interview Question 🔥 ---

Javascript wait for anyone or anything.

<!-- Eg - 1 -->

function x() {
var i = 5;
setTimeout(() => {
console.log(i);
}, 1000);
console.log("Hello JS");
}

x()

// initially Hello JS will be printed then after 1 sec value of i will be printed
Thats JS doesnt wait for anything.

<!--! Eg - 02 -->

// The famouse question Clousers + SetTimeout
function x() {
for (var i = 1; i <= 5; i++) {
setTimeout(() => {
console.log(i);
}, i \* 1000);
}
console.log("Hello JS");
}
x();

<!--! Explaination of the above code -->

JS dont wait for anything so, it will iterate through the loop ,for setTimeout function it will set the callback
function as function and set the timer and save those function away it will do the same for the rest of the iteration
after iteration it will log the HEllo js, so now in the saved funcitons when the timer finished that function will be
called / Put on the call stack and executes.when the first function completes it time the value of i already 6 so
all the i will be show the 6 as printed value.(if we just change the var to let the bugg will be fixed but if the
interviewr asked to do using with the var u have to do the below method.(Closures Mehtod))

<!--! final annswer using cosures -->

function x() {
for (var i = 1; i <= 5; i++) {
function close(i) {
setTimeout(() => {
console.log(i);
}, i \* 1000);
}
close(i);
}
}

x();

<!--! Explaination of the above code -->

In this code, the `close` function is used to encapsulate the `setTimeout` function. This encapsulation ensures that
each `setTimeout` callback receives its own copy of the `i` variable, reflecting the intended behavior.

When `close(i)` is called inside the loop, it passes the current value of `i` to `setTimeout`, which then
logs `i` after `i * 1000` milliseconds. This setup works because each `close` call captures the
specific `i` value at that moment due to closures in JavaScript.

Therefore, by using the `close` function to enclose the `setTimeout`, we ensure that each timeout callback
displays the correct value of `i` at the time `close` was invoked, demonstrating the power of closures to
manage variable scope effectively in asynchronous JavaScript operations.

---Ep.13 - FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions ---
