//if statements=if a condition is true,execute some code.ELSE do something else

let age=25;
if(age>=18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18 or older to enter this site");
}

let time=12;
if(time<=12){
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
}
//BOOLEANS
let isstudent=true;
if(isstudent){
    console.log("You are a student");
}
else{
    console.log("You are NOT a student");
}

//NESTED IFS
let years=18;
let haslicense=true;
if(years>=18){
    console.log("You are Old Enough to drive");
    if(haslicense){
        console.log("You have your license")
    }
    else{
        console.log("You do not have your license yet")
    }
}
else{
    console.log("You have to be 18 or older to have a license")
}
//ELSE IF STATEMENTS
//THE ORDER OF OUR CLAUSE DOES MATTER

let age_in_years=0;
if(age_in_years>=100){
    console.log("You are too old to enter this site");
}
else if(age_in_years==0){
    console.log("You can't enter.You were just born")
}
else if(age_in_years>=18){
    console.log("You are old enough to enter this site");
}
else if(age_in_years<0){
    console.log("Age cannot be less than 0");
}
else{
    console.log("You must be 18+ to enter this site")
}
