const label1=document.getElementById("mylabel1");
const button=document.getElementById("btn");
const label2=document.getElementById("mylabel2");
const label3=document.getElementById("mylabel3");
let randomNum;
let randomNum2;
let randomNum3;

button.onclick=function(){
    randomNum=Math.floor(Math.random()*100)+1;
    label1.textContent=randomNum;
    console.log(randomNum);

    randomNum2=Math.floor(Math.random()*100)+1;
    label2.textContent=randomNum2;
    console.log(randomNum);

    randomNum3=Math.floor(Math.random()*100)+1;
    label3.textContent=randomNum3;
    console.log(randomNum);

}
