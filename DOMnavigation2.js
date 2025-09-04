//DOM navigation=the process of navigating through the structure of an HTML document using Javascript
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//------firstElementChild------------
//const ulElements=document.querySelectorAll("ul")
//const firstChild=ulElements[0].firstElementChild
//firstChild.style.backgroundColor="yellow"//selects the first item of the first ulElement.ie "Apple"

//usingforEach
const ulElements=document.querySelectorAll("ul");

ulElements.forEach(ulElement=>{
    const firstElement=ulElement.firstElementChild
    firstElement.style.backgroundColor="yellow"
})//this will highlight the first element of every ul item in yellow

