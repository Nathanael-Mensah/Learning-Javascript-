//DOM navigation=the process of navigating through the structure of an HTML document using Javascript
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//previousElementSibling
const element=document.getElementById("vegetables")
const siblings=element.previousElementSibling
siblings.style.backgroundColor="yellow"//highlights the previous unordered list before vegetables.ie fruits in 
//yellow

const item=document.getElementById("desserts")
const previousSibling=item.previousElementSibling
previousSibling.style.backgroundColor="blue"
//highlights the previous unordered list before desserts in blue.ie vegetables

const highlighteditem=document.getElementById("cake")
const previousitem=highlighteditem.previousElementSibling
highlighteditem.style.backgroundColor="green"
