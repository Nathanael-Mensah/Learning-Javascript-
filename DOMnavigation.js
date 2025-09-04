//DOM navigation=the process of navigating through the structure of an HTML document using Javascript
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//----------lastElementChild---------------
const element=document.getElementsByClassName("vegetables")[0];
const lastChild=element.lastElementChild;
lastChild.style.backgroundColor="yellow";//this highlights the lastelement with class vegetables in yellow
//.ie  potatoes

//using forEach because querysSelectorAll have their own built-in nodelist
const ulElements=document.querySelectorAll("#fruits");
ulElements.forEach(ulElement=>{
    const lastelement=ulElement.lastElementChild;
   lastelement.style.backgroundColor="blue";
})      // selects all the lastElement of every unordered list and highlights them in blue

