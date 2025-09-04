//DOM=DOCUMENT OBJECT MODEL
//    object{} that represents the page you see in the web browser and provides an API to interact with it
//     web browser constructs the DOM when it loads an HTML ,and structures all the elements in a tree_like 
//     representation.Javascript can access to dynamically change the content,structure,and style of a webpage

document.title="My website";
//document.body.style.backgroundColor="hsl(0,0%,15%)";

//console.dir(document)
const username="";
const welcomeMsg=document.getElementById("welcome-msg")

welcomeMsg.textContent +=username ==="" ? "Guest":username;
