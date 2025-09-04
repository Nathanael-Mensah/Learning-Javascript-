//destructuring=extract values from arrays and objects,then assign them to variables in a convenient way
//              []=to perform array destructuring
//              {}=to perform object destructuring

//----------------EXAMPLE 1---------------------------
//SWAP THE VALUE OF TWO VARIABLES

let a=1;
let b=2;

[a,b]=[b,a];
console.log(a);
console.log(b);

//------------------EXAMPLE 2---------------------
//SWAP TWO ELEMENTS IN AN ARRAY
const colors=["red","green","blue","black","white"];
[colors[0],colors[4]]=[colors[4],colors[0]]
console.log(colors);

//------------------EXAMPLE 3---------------------
//ASSIGN ARRAY ELEMENTS TO VARIABLES
const color=["red","green","blue","black","white"];
const [firstcolor,secondcolor,thirdcolor,...extracolors]=color;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);
console.log(color);

//-------------------EXAMPLE 3---------------------
//EXTRACT VALUES FROM OBJECTS

const person1={
    firstname:"Spongebob",
    lastname:"Squarepants",
    age:30,
    job:"frycook",
}
const person2={
    firstname:"Patrick",
    lastname:"Star",
    age:34,
}
//const{firstname,lastname,age,job}=person1;
//console.log(firstname);
//console.log(lastname);
//console.log(age);
//console.log(job);

const{firstname,lastname,age,job="unemployed"}=person2;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);


//-------------------EXAMPLE 4---------------------
//DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstname,lastname,age,job="unemeployed"}){
    console.log(`name:${firstname} ${lastname}`);
    console.log(`age:${age}`);
    console.log(`job:${job}`);
}
    
const individual1={
    firstname:"Spongebob",
    lastname:"Squarepants",
    age:30,
    job:"frycook",
}
const individual2={
    firstname:"Patrick",
    lastname:"Star",
    age:34,
}
displayPerson(individual2)
//individual1 job property will be frycook;because it already has a job property but individual2 job property will
//be unemployed because they hve no job property and will take the default job property set.ie unemployed