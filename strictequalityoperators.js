//==ASSIGNMENT OPERATOR;
// ==COMPARISON OPERATOR(compares if values are equal)
//===STRICT COMPARISON OPERATOR(compares if values and data types are equal)
//!=INEQUALITY OPERATOR(compares if values are equal)
//!==STRICT INEQUALITY OPERATOR(compares if values and datatypes are equal)


const Pi=3.14;//ASSIGNMENT OPERATOR
//COMPARISON OPERATOR
if (Pi=="3.14"){
    console.log("That is Pi")//returns  that is Pi because it is not a strict(===) check.ie doesn't take datatypes 
    //into account
}
else{
    console.log("That is not Pi")
}
//STRICT EQUALITY OPERATOR
const temp=25;
if(temp==="25"){
    console.log("The temperature is OKAY")//returns temperature is not okay because although values are the same 
    // we are comparing a string and an integer
}
else{
    console.log("The temperature is NOT OKAY")
}
//INEQUALITY OPERATOR
const radius=25;
if(radius !=25){
    console.log("INCORRECT RADIUS")//returns correct radius.ie the check is not strict
}
else{
    console.log("CORRECT RADIUS")
}
//STRICT INEQUALITY OPERATOR
const perimeter="52";
if(perimeter !==52){
    console.log("That is not the correct perimeter")
}
else{
    console.log("That is the correct perimeter")//returns that is  not the correct radius.The data types are different
    //even when the values are the same.ie we are comparing a string with an integer
}