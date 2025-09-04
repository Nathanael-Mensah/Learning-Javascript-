//closure=A function defined inside of another function the inner function has acess to the variables  and scope
//  of the outer function
//Allow for private variables and state maintenance.
//Used frequently in JS frameworks:React,Vue,Angular

function outer(){
    let message="Hello"

    function inner(){
        console.log(message)
    }
    inner();
}
outer()
//if we change the value of message outside of the scope of the function it is not going to change.ie outer() still 
//outputs hello

function createCounter(){

    let count=0;

    function increment(){
    count++;
    console.log(`Count increased to ${count}`);
    return {increment};
}
}
const counter=createCounter();
counter.increment;
counter.increment();

//function createCounter(){

//    let count=0;

//    function increment(){
//    count++;
//    return(`Count increased to ${count}`)
//}
//}
//const counter=createCounter();
//console.log(counter);
//console.log(counter);