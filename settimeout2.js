const start=document.getElementById("startbutton")
const clear=document.getElementById("clearbutton")

start.onclick=function(){
    button=setTimeout(()=>window.alert("Hello"),3000)
    console.log("STARTED")
}

clear.onclick=function(){
    clearTimeout(button);
    console.log("CLEARED")
}