//string methods=allows you to manipulate and work with strings

let username="Nathanael";
//console.log(username.charAt(2)) ;//outputs the character at index 2 to console;

//console.log(username.indexOf("t"));//outputs the index of the first occurence of "t" in the string

//console.log(username.lastIndexOf("a"));//outputs the index of the last occurence of a  character in a string

//console.log(username.length);//outputs the number of characters in a string

//console.log(username.trim());

//console.log(username.toLowerCase());

//console.log(username.toUpperCase());

console.log(username.repeat(3));

let result=username.startsWith(" "); //there's same for endswith and includes ie;firstname.endsWith(" ");
//firstname.includes(" ");
console.log(result);

let firstname="Daniel"; 
let output=firstname.startsWith(" ");

if (output){
    console.log("Firstname cannot contain spaces");
}
else{
    console.log("firstname");
}

let phone_number=123-456-7890;
phone_number=phone_number.replaceAll("-","/");
console.log(phone_number);

let tel=123-567-8910;
tel=tel.padStart(15, "0");//this adds zeros to the start of the number until they are 15 characters long;
console.log(tel);
//.padEnd(20, "0") also adds zeros to the end of the numbers until they are 20characters long;




