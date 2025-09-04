//.filter()=creates a new array by filtering out elements

const ages=[16,17,18,19,20,60];

function isAdult(element){
    return element>=18;
}
const adults=ages.filter(isAdult);
console.log(adults)

function isChild(element){
    return element<18;
}
const children=ages.filter(isChild);
console.log(children)

const words=["apple","orange","banana","kiwi","pomogranate","coconut"]

function lessthansix(element){
    return element.length<=6;
}
const six_words_or_less=words.filter(lessthansix)
console.log(sixwordsorless)


function morethansix(element){
    return element.length>6;
}
const not_less_than_six_words=words.filter(morethansix);
console.log(six_words_or_more)