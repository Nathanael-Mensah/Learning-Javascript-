//Logical Operators=used to combine or manipulate boolean values(true/false)
//AND=&&
// OR=||
// NOT=!

//AND LOGICAL OPERATOR
const temp=250;
if (temp>=0 && temp<=30){
    console.log("The weather is GOOD")
}
else{
    console.log("The weather is BAD")
}

//NOT LOGICAL OPERATOR
is_sunny=false;
if(!is_sunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}

//OR LOGICAL OPERATOR
const temperature=25;
if(temperature >=0 || temp<=30){
    console.log("The temperature is GOOD")
}
else{
    console.log("The temperature is BAD")
}

//VERY VERY IMPORTANT⬇️:

//if (temp >= 0 || temp <= 30)
//This condition will always be true, because:

//If temp is 50 → it's greater than 0 ✅

//If temp is -10 → it's less than 30 ✅

//So even values like -100 or 100 would satisfy at least one of the conditions.

//Correct condition using AND:
//If you want to check if temp is between 0 and 30, use && (AND):

//Example;

//let temp = 25;

//if (temp >= 0 && temp <= 30) {
//    console.log("The weather is GOOD");
//}
// else {
//   console.log("The weather is BAD");
//}
//Output:
//The weather is GOOD
