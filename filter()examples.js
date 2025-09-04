//.filter=creates a new array by filtering out elements
numbers=[1,2,3,4,5,6];
const evenNumbers=numbers.filter(isEven);
console.log(evenNumbers);

const oddNumbers=numbers.filter(isOdd);
console.log(oddNumbers);

function isEven(element){
    return element % 2===0
};
function isOdd(element){
    return element % 2===1
};
