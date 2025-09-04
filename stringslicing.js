//string slicing=creating a substring  from a portion of another string;
//String.slice(start,end)
const fullname="Bro Code";
let firstname=fullname.slice(0,3);//the ending index ie;3 is exclusive so we have to add a +1 to the ending
// index.We wanted to print "Bro" but the ending index is exclusive so fullname.slice(0,2) will only print Br.
//NB:spaces are also counted as indexes
console.log(firstname);

let lastname=fullname.slice(4,8);
console.log(lastname);

let firstChar=fullname.slice(0,1);
console.log(firstChar);

let lastChar=fullname.slice(-1);
//this wil output the last letter e.-2 will outputs de,-3 inputs ode,-8 outputs Bro code
//fullname.slice(0,-1) will output Bro cod without the e

console.log(lastChar)

//TO MAKE OUR PROGRAM MORE RELIABLE AND DYNAMIC WE WILL COMBINE INDEX OF WITH SLICING
const Name="Broseph Code";
let first_name=Name.slice(0,Name.indexOf(" "));
console.log(first_name);

//let last_name=Name.slice(4,8);
//console.log(lastname);

//let first_Char=Name.slice(0,1);
//console.log(firstChar);

//let last_Char=Name.slice(-1);
//console.log(lastChar);

const email="nathanaelmensah@gmail.com";
let username=email.slice(0, email.indexOf("l")+1);//only index of "l" slices up whatever before the first ocurrence
// of "l" but+1 alongside the "l" makes "l" inclusive
console.log(username);

let extension=email.slice(email.indexOf("@")+1);//only index of "@" slices up whatever before the first occurence
//of @ but +1 alongside @ makes the @ inclusive;that means it will be outputed too
console.log(extension)

//NB:SLICING WITHOUT STARTING POINT SLICES EVERYTHING FROM THE START OF THE INDEXOF POSITION TO THE END OF THE
//STRING