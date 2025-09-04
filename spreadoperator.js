//spread operator=... allows an iterabe such as an array or string to be expanded into sperate elements
//                     unpacks the element

let fruits=["apple","orange","banana"];
let newFruits=[...fruits];
//newFruits and fruits are two different arrays but contain identical elements
console.log(fruits);

let vegetables=["carrots","celery","potatoes"];
let foods=[...fruits,...vegetables,"eggs","milk"];
console.log(foods)
//we have the ability to append seperate elements along with these arrays.i.e in this case eggs and milk