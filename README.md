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
