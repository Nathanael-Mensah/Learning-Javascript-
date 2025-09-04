// forEach() = a method used to iterate over the elements of an array and apply a specific function (callback) to each one

// Syntax: array.forEach(callback)
// The callback receives three arguments: element, index, and array

let numbers = [1, 2, 3, 4, 5];

// A simple function to display each element
function display(element) {
    console.log(element);
}

numbers.forEach(display);

// We created a function `display` that takes one number (called element) and prints it.
// Then we used numbers.forEach(display) to go through each number in the list and print it.

// MUCH SIMPLER VERSION:
// We created a function `display` that takes one number and prints it,
// then used numbers.forEach(display) to pass each number into the display function one by one.


// Example: doubling each number in the array
function double(element, index, array) {
    array[index] = element * 2;
}
numbers.forEach(double);
numbers.forEach(display); // prints the updated array

// JavaScript’s forEach() automatically passes three values to your function:
// the current item (element), its position (index), and the full array (array),
// EVEN IF YOU DIDN’T DEFINE THEM YOURSELF.

// JavaScript’s forEach() always passes arguments in the order (element, index, array),
// so if you mix them up your function will behave incorrectly — so always keep them in this order.


// Reset the array to original values
numbers = [1, 2, 3, 4, 5];

// Triple each number
function triple(element, index, array) {
    array[index] = element * 3;
}
numbers.forEach(triple);
numbers.forEach(display); // prints the updated tripled array
