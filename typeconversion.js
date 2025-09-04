//typeconversion=changes the datatype of a value to another
//strings,numbers, boolean

let age=window.prompt("How Old Are You");
age=Number(age)
age+=1;
console.log(age, typeof age);

let x="pizza";
let y="pizza";
let z="pizza";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof x);
//NaN in the console means not a number  because pizza is a string but the 'number' after it is as a result of us 
//typecasting it to a number

console.log(y,typeof y);

console.log(z,typeof z);
//boolean return True will always be the case once there is a value

let a="0";
let b="0";
let c="0"

a=Number(a);
b=String(b);
c=Boolean(c);

console.log(a,typeof a)
console.log(b,typeof b)
console.log(c,typeof c)

