//Built in object that provides a collection of properties and methods//
let x=3.21;
let y=2;
let a=10;
let b=45;
d=-3.21;
let z;

z=Math.round(x);
console.log(z);

z=Math.floor(x);//floor always rounds down i.e x=3.21 rounded down is 3
console.log(z);

z=Math.ceil(x); //ceil always rounds up.ie 3.21 rounded up is 4
console.log(z);

z=Math.truncate(x);//will erase any decimal portion//
console.log(z);

z=Math.power(x,y);
console.log(z);

z=Math.sqrt(x);
console.log(x);

z=Math.log(a);//set the natural logarithm of a number
console.log(z);

z=Math.sin(b);
console.log(z);

z=Math.cos(b);
console.log(z);

z=Math.tan(b);
console.log(z);

z=Math.abs(d);
console.log(z)

z=Math.sign(x);
console.log(z);

//returns the sign of a number.If the number is positive 1 is returned;if the number is negative;
//-1 is returned;if the number was zero zero would be returned

let max=Math.max(x,y,a);
console.log(max);

let min=Math.min(x,y,a);
console.log(min);
