//DOM navigation=the process of navigating through the structure of an HTML document using Javascript
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

const element=document.getElementById("cake");
const item=element.nextElementSibling;
item.style.backgroundColor="green"//this highlights the list item after li item cake

const sibling=document.getElementById("fruits");
const item_element=sibling.nextElementSibling;
item_element.style.backgroundColor="yellow"// this highlight the next ul list after ul with id="fruits"