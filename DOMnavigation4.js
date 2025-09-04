//DOM navigation=the process of navigating through the structure of an HTML document using Javascript
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//------ParentElement---------
const element=document.getElementById("pie");
const parentitem=element.parentElement;
parentitem.style.backgroundColor="yellow";
//highlights the parent element of the li item with id="pie" in yellow.ie ul with id="deserts" is the parent

const item=document.getElementById("apple");
const parent=item.parentElement;
parent.style.backgroundColor="brown"
//highlights the parent element of the li item with id="apple" in brown.ie ul element with id="fruits" is the
//parent
