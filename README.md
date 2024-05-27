# 2-LFS---JavaScript-

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

-------------------------Namaste JavaScript-------------------------------------------
---Ep.1 - How JavaScript Works 🔥& Execution Context ---

<!--! Important = Everything in Javascript happens inside an Execution Context. -->

we can assum the exectuion context like a big box or a container in which whole js code is executed.
it has 2 componets Memory (variable environment) and code (Thread of Execution), Memory component contains variable and functions as key value pairs, and code component is were whole js code is executed.

pic 1 = execution context.

<!--! Important = JS is a synchronous single-threaded language. -->

single threaded = can only execute one command at a time.
synchronous single-threaded = can only execute one command at a time in a specific order. which means it can only go to the next line once the current line has been finished executing.

---Ep.2 - How JavaScript Code is executed? ❤️& Call Stack ---

When we run a js programe a global execution context will be created. this EC(excution context) will be created in 2 phases.
1 = Memory Creation phase. (Memory allocation for the variables and functions inside the global phase)
pic 2 = phase 1

2 = Code Execution Phase. (Assigning values to the variables and if ther is any function call(Function invoking) a brand new execution context will be created inside the code are, this new EC will also have 2 parts which are memory and code. so this new EC will go through the creation of the EC which involve 2 phases. after these 2 phases newly created entire Executon will be deleted. and the controll backs to the global EC)

pic = phase 2.1
pic = phase 2.2
pic = phase 2.3
pic = phase 2.4

when JS done with its work, now that the programe is finished, the whole global Execution context will be deleted.

pic = phase 2.5

--The Call Stack--

To handle the execution context creation, deleton, controll JS manages a stack thisis called js Callstack.
whenever any js program runs at the bottom of the stack the global execution context (GEC) populated.and whenever function is invoked or new EC is created it will be pushed inside the callstack, and give it conrtoll when the new EC is completed it will be poped out of the callstack and gives controll back to the GEC. when all executions are completed the GEC also will be poped out of the Callstack and the Callstack will be empty.

Pic = Callstack 2.6
Pic = Callstack 2.7

<!--! important = Callstack maintains the order of execution of execution context. -->

callstack is also called as execution controll stack, program stack, control stack, Runtime stack, Machine stack.

---Ep.3 - Hoisting in JavaScript 🔥(variables & functions) ---

when asked what is hoisting in interview first give the typical answer then give the callstack answer after saying if we look at this in the excution context callstack view in js.

---Ep.4 - How functions work in JS ❤️ & Variable Environment ---
