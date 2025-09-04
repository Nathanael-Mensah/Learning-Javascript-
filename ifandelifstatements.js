//ELSE IF STATEMENTS
//THE ORDER OF OUR CLAUSE DOES MATTER
const button=document.getElementById("mysubmit");
const text=document.getElementById("mytext");
const display=document.getElementById("displayresult");
let age;


button.onclick=function(){
    age=text.value;
    age=Number(age);
    
    if(age>=100){
        display.textContent=`You are too old to enter this site`;
    }
    else if(age==0){
        display.textContent=`You can't enter.You were just born`;
    }
    else if(age>=18){
        display.textContent=`You are old enough to enter this site`;
    }
    else if(age<0){
        display.textContent=`Age cannot be less than zero`;
    }
    else{
        display.textContent=`You have to be 18 or older to enter this site`;
    }

}
    
 