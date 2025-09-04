const IncreaseButton=document.getElementById("IncreaseBtn");
const DecreaseButton=document.getElementById("DecreaseBtn");
const ResetButton=document.getElementById("ResetBtn");
const countlabel=document.getElementById("countlabel");
let count=0;

IncreaseButton.onclick=function(){
    count++
    countlabel.textContent=count;
}
DecreaseButton.onclick=function(){
    count--;
    countlabel.textContent=count;
}
ResetButton.onclick=function(){
    count=0;
    countlabel.textContent=count;
}