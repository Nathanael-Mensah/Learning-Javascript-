//rest parameters allows us to combine elements and combine them into an array

//rest parameters=(...rest) allows a function to work with a variable number of arguments by bundling them 
//into an array

//                                    spread=expands an array into seperate elements
//                                     rest=bundles seperate elements into an array

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1="pizza";
const food2="hamburger";
const food3="hotdog";
const food4="sushi";
const food5="ramen";

const foods=openFridge(food1,food2,food3,food4,food5);
console.log(foods);

const foodstuffs=getFood(food1,food2,food3,food4,food5);
console.log(foodstuffs);
//in my unerstanding we are able to add as many arguments as we want because of ...foods UNLIKE PYTHON WERE WE
//WOULD HAVE TO PASS THE SAME NUMBER OF ARGUMENTS IN openfridge() AND function openfridge() SAME APPLIED TO 
//getfood() and function getfood()

function sum(...numbers){
    for(let number of numbers){
        result+=number;
    }
    return result
}
const total=sum(1,2,3,4,5);
console.log(sum);

function combineStrings(...strings){
    return strings.join(" ");
}

const Fullname=combineStrings("Dr","Spongebob","Squarepants","III");
console.log(Fullname);