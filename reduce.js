//.reduce=reduce the elements of an array to a single value;

const prices=[5,30,10,25,15,20];
const total=prices.reduce(sum);
console.log(`$${total}`);

function sum(accumulator,element){
    return accumulator + element
};
//we can rename accumulator and element to previous and next respectively and this will make it easier to read,
//what this means is that the accumulator is the "previous" element that is going to add to the next element 
// "element" in the case of 5 its 0+5,in the case of 30 its 30+5 and so on until we reach the last element to get
//a single value and that is basically .reduce() in javascript

const grades=[80,89,98,87,78,82];
const sumGrades=grades.reduce(totalGrades);
console.log(`The total grades calculated ${sumGrades}`)

function totalGrades(accumulator,element){
    return accumulator + element
}

const maximum=grades.reduce(getMax);
console.log(`The maximum grade is ${maximum}`);

function getMax(accumulator,element){
    return Math.max(accumulator,element)
}

const minimum=grades.reduce(getMinimum);
console.log(`The minimum grade is ${minimum}`);

function getMinimum(accumulator,element){
    return Math.min(accumulator,element)
};
