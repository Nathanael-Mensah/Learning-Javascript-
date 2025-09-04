//forEach()=method used to iterate over the objects of an array and apply a secific function(callback)to each 
//element

//array.forEach(callback)
//element,index,array are provided

let numbers=[1,2,3,4,5];

function display(element){
    console.log(element);
}
numbers.forEach(display);
//we created a function display,with parameter element,inside the function we also console.log(element).Element 
//refers to every single number individually in the numbers list.Any name could be used,we chose Element.
//now we pass display function as a callback to numbers.forEach.Inside the function display we console.log(Element)
//now the numbers.forEach(display) takes each element and printed it to the console

//MUCH SIMPLER VERSION:
//We created a function display that takes one number (called element) and prints it, then used numbers.
// forEach(display) to go through each number in the list one by one and pass it to the display function 
// to print it


function double(element,index,array){
    array[index]=element * 2;
}
numbers.forEach(double);
numbers.forEach(display)//will help us view the changes.ie the function was created to output each number.ie element

//JavaScript’s forEach() automatically passes three values to your function: the current item (element), 
// its position (index), and the full array (array) — EVEN IF YOU DIDNT DEFINE THEM YOURSELF.

//JavaScript’s forEach() always passes arguments in the order (element, index, array), so if you mix
// them up your function will behave incorrectly — so always keep them in this order(element,index,array).

numbers=[1,2,3,4,5];
function triple(element,index,array){
    array[index]=element * 3;
}
numbers.forEach(triple);
numbers.forEach(display);

numbers=[1,2,3,4,5];
function squared(element,index,array){
    array[index]=Math.pow(element,2);
}
numbers.forEach(squared);
numbers.forEach(display);

numbers=[1,2,3,4,5];
function cube(element,index,array){
    array[index]=Math.pow(element,3);
}
numbers.forEach(cube);
numbers.forEach(display);

let fruits=["apple","orange","banana","coconut"]

function show(element){
    console.log(element);
}
function uppercase(element,index,array){
    array[index]=element.toUpperCase()
}
fruits.forEach(uppercase)//always apply the changes before you output it.ie before forEach(show);
fruits.forEach(show);

fruits=["apple","orange","banana","coconut"]

function capitalize(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}
fruits.forEach(capitalize);//always apply the changes before you output.ie before forEach(show)
fruits.forEach(show);
