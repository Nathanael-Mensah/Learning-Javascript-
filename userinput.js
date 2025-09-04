//how to accept user input
//EASY WAY=window prompt
//PROFFESIONAL WAY=HTML textbox
let username;

document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    console.log(username);
}
document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myH1").textContent=`Hello ${username}`
}
window.alert("Welcome to my Website")