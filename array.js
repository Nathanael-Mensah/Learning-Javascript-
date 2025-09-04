//array=a variable like structure that can hold more than 1 value
let fruits=["apple","orange","banana"];

//fruits[1]="watermelon" this is going to replace orange with watermelon
//fruits[3]="pear" this will add pear at index 3
//fruits.push("coconut"); this will add coconut to the end of the array
//fruits.pop();removes the last element
//fruits.unshift("mango")adds an elemnt to the beginning
//fruits.shift();removes the element at the beginning

//let numOfFruits=fruits.length returns the length of the array
//console.log(numOfFruits)

//let index=fruits.indexOf("banana");
//console.log(index)
// returns the index or position of an elementElse if we search for the index of
//an element that is not in the array.i.e grapes, -1 will be returned in the console

//using for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// using for loop if we want to display the order of the array in reverse;
console.log("Array in reverse:");
for(let i=fruits.length - 1;i>=0;i--){
    console.log(fruits[i])
}
//i=fruits.lenght - 1;is so because without that the length of the array is 4 including undefined so we write
//fruits.length - 1 to remove undefined displayed in the console

//using a much simpler for loop
console.log("using much simpler for loop");
for(let fruit of fruits){
    console.log(fruit);
}

console.log("fruits sorted in alphabetical order:");
let sort=fruits.sort();//sorts fruits in alphabetical order
console.log(sort);//not giving the desired results find out why

console.log("fruits sorted in reverse alphabetical order i.e descending:");
let reversed_sort=fruits.sort().reverse(); //sorts them in reverse alphabetical order
console.log(reversed_sort);