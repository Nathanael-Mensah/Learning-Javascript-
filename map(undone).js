//.map()=accepts a callback and applies that function to each element of an array then return a new array
const students=["Spongebob","Patrick","Squidward","Sandy"];
const studentsUpper=students.map(uppercase);
console.log(studentsUpper);

function uppercase(element){
    return element.toUpperCase()
}
numbers=[1,2,3,4,5];
const squares=numbers.map(square);
console.log(squares);

function square(number,index,array){
    array[index]=Math.pow(number, 2);
    
}//ask gpt about the numbers part