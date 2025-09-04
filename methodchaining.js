//method chaining=calling one method after another in one continous line of code

let username=window.prompt("Enter your username: ")

//---NO METHOD CHAINING----
//username.trim()

//let letter=username.charAt(0);
//letter=letter.toUpperCase();

//let extraChars=username.slice(1);
//extraChars=extraChars.toLowerCase();
//username=letter + extraChars;
//console.log(username)

//----METHOD CHAINING---
username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);

//username.trim=removeswhitespaces at the start
//charAt(0).toUpperCase=targets the character at index 0 ie the very first character,changes it to Uppercase
//+=string concartination.ie adds a string to another string.
//username.trim()=trims any whitespaces after the firstletter if any.
//.slice(1) outputs every character after index 0
//toLowerCase=changes it to lowercase