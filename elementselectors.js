//element selectors=methods used to target and manipulate HTML elements
//they allow you to select one or multiple HTML elements,from the DOM(Document Object Model)
//1.document.getElementById()        //Element OR NULL
//2.document.getElementsByClassName() //HTML COLLECTION
//3.document.getElementSByTagName() //HTML COLLECTION
//4.document.queryselector()        //FIRST ELEMENT OR NULL
//5.document.querySelectorAll()     //NODELIST

//NB:html collections dont have a forEach method

const myHeading=document.getElementById("my-heading");
myHeading.style.backgroundColor="yellow";
myHeading.style.textAlign="center";

console.log(myHeading)

//2.document.getElementsByClassName
const fruits=document.getElementsByClassName("fruits");
console.log(fruits)

//fruits[0].style.backgroundColor="yellow" //highlights only first fruit after the div tag in yellow Color.ie Apple

for(let fruit of fruits){
    fruit.style.backgroundColor="yellow";
}// highlights all the colors in the div element to yellow

//using forEach method but we have to typecast fruits to an array first because html fuctions dont have a forEach 
//method
//Array.from(fruits).forEach(fruit =>{
//    fruit.style.backgroundColor="yellow";
//});

//3.document.getElementByTagName
const h4Elements=document.getElementsByTagName("h4");
console.log(h4Elements)

//h4Elements[0].style.backgroundColor="yellow"; //highlights the first h4 tag.There are two h4 tags in our html
//the first with textcontent Root Vegetables is highlighted yellow

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor="yellow";
}//highlights the two h4 elements in yellow

const liElements=document.getElementsByTagName("li");
//liElements[0].style.backgroundColor="lightgreen"; //this highlights the first list item of the first ul tag
//ie Beets

for(let liElement of liElements){
    liElement.style.backgroundColor="green"
}//highlights all the li items in our html in green

//4.document.querySelector
const element=document.querySelector(".pastries")
element.style.backgroundColor="blue"//HIGHLIGHTS THE COLOR OF THE FIRST ITEM IN THE CLASS FRUITS IN YELLOW
console.log(element)//returns null if there's no element with class pastries

//IN MY UNDERSTANDING querySelector is used to select the first element of anything regardless it is a class,
// html tag,Id or whatever

//4.document.querySelectorAll
const fruit_items=document.querySelectorAll("li");
console.log(fruit_items)//outputs Nodelist6 meaning there are 6 li items in our html document
//fruit_items[0].style.backgroundColor="red";//Highlights the first item of the list in red

//querySelectorAll has a built-in forEach() method
//fruit_items.forEach(fruit_item =>{
//    fruit_item.style.backgroundColor="red"
//})   //highlights all the li items in our html in red

