//repeat some code WHILE some condition is true
//let username="";
//while(username==""){
//    console.log("You did not enter your username");
//}
//console.log(`Hello ${username}`)//it will output hello only no username because we set username to an empty string
//BUT USING A STRICT CHECK IE=== WILL CHECK IF THE USER DIDN'T ENTER A USERNAME OR USERNAME IS EMPTY

//using do while loop we dont

//let name="BroCode";
//while(name===""){
//    console.log("You did not ENTER your name");
//}
//console.log(`Hello ${username}`)

let user_name="";
while(user_name===""||user_name===null){
    user_name=window.prompt("Enter your username");
//the problem with this is that when the user press cancel on the window prompt the console outputs Hello null
//to prevent this we need to use the or logic operator || to add one more logic   
}
console.log(`Hello ${user_name}`)

//DO WHILE LOOPS
//FOR DO_WHILE LOOPS THE ADVANTAGE HERE IS THAT WE CAN SET USERNAME OR ANY OTHER VARIABLE TO BE UNDEFINED 
// IE=let user_name; WITHOUT HAVING TO MANUALLY SET IT TO AN EMPTY STRING;
//THE LOGIC BEHIND IT IS THAT WE SHOULD PERFORM A CODE FIRST BEFORE WE DO ANY OTHER CODE.IN THE EXAMPLE BELOW WE
//SET IT TO SHOW THE WINDOW PROMPT FIRST BEFORE THE LOGIC

let student_name;
do{
    student_name=window.prompt("Enter name of student");
}while(student_name===""|| student_name===null)
console.log(`Hello ${student_name}`);

let LoggedIn=false;
let username;
let password;

while(!LoggedIn){
    username=window.prompt("Enter your username")
    password=window.prompt("Enter your password")

    if(username==="myUsername"&&password==="myPasword"){
        LoggedIn=true;
        console.log("You are Logged in")
    }
    else{
        console.log("Invalid Credentials.Please try again")
    }
}