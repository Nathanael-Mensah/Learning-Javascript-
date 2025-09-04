//A value that cannot be changed once you assgn it a constant
const PI=3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("mytext").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myH3").textContent=circumference + "cm";
}
