//DOM navigation=the process of navigating through the structure of an HTML document using Javascript
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//-------.children----------
const element=document.getElementById("vegetables")
const veges=element.children

//NB:html collections dont have a built in forEach method so we use Array.from(variable_name).ie from
//  method of arrays

Array.from(veges).forEach(vege=>{
    vege.style.backgroundColor="yellow"
})//selects the entire li items under ul with id="vegetables" and highlights them in yellow

//we can acess the children by an index number
const items=document.getElementById("fruits");
const foodvegetables=items.children;
foodvegetables[1].style.backgroundColor="green"