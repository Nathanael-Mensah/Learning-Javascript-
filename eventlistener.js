//eventLisstener=Listen for specific events to create interactive web pages
//               events:click,mouseover,mouseOut
//                addEventListener(event,callback) OR addEventListener(event,arrow function)
const mybox=document.getElementById("myBox");

function changeColor(event){
    event.target.style.backgroundColor="tomato"
    event.target.textContent="OUCH🤕"
}
mybox.addEventListener("click",changeColor);

//ADDING MOUSEOVER EVENTLISTENER
function mouse(event){
    event.target.style.backgroundColor="blue";
    event.target.textContent="Dont Dare!😑";
}
mybox.addEventListener("mouseover",mouse);

//ADDING MOUSEOUT EVENTLISTENER
function out(event){
    event.target.style.backgroundColor="green";
    event.target.textContent="Click Me😉"
}
mybox.addEventListener("mouseout",out)

//USING ARROW FUNCTIONS
const myBox2=document.getElementById("myBox2")

myBox2.addEventListener("click",event =>{
    event.target.style.backgroundColor="red";
    event.target.style.textContent="Clicked!";
})
//ADDING MOUSEOVER EVENTLISTENER
myBox2.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Don't do it";
})
//ADDING MOUSEOUT EVENTLISTENER
myBox2.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="green";
    event.target.textContent="Click Here"
})

const myBox3=document.getElementById("myBox3")

function alterColor(event){
    event.target.style.backgroundColor="blue";
    event.target.textContent="Oops";
}
myBox3.addEventListener("click",alterColor)

//USING ARROW FUNCTIONS
const myButton=document.getElementById("myButton")

myButton.addEventListener("click",event =>{
    event.target.style.backgroundColor="red";
    event.target.textContent="Clicked!";
})
//ADDING MOUSEOVER EVENTLISTENER
myButton.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Don't do it";
})
//ADDING MOUSEOUT EVENTLISTENER
myButton.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="green";
    event.target.textContent="Click Here";
})
