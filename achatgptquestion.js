const ulElements=document.getElementByTagName("li");
const firstChild=ulElements.firstElementChild;
firstChild.style.backgroundColor="yellow";

//2.how do i higlight all previoussiblings if there are many ul items with ids or classes or whatever with
//previousElementSiblings

//3.ask this question using the html structure from DOMnavigation4.html
const element=document.getElementById("desserts")
const parentElement=element.parentElement
parentElement.style.backgroundColor="yellow"

//4.does nextElementSibling and previousElementSibling return a html collection?