//object=A collection of related properties and/or methods
//can represent real world objects(people,products,places)
//object={key,value,function()}

const person1={
    firstName:"Spongebob",
    lastName:"SquarePants",
    age:30,
    isEmployed:true,
    sayHello:function(){console.log("Hi I'm Spongebob")},
    sayBye:function(){console.log("Goodbye")},
};
const person2={
    firstName:"Patrick",
    lastName:"Star",
    age:42,
    isEmployed:false,
    sayHello:() => {console.log("Hey,I'm Patrick")},
    sayBye:function(){console.log("Bye")},
};
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
person1.sayHello();
person1.sayBye();

//properties are things an object has.such as firstname or age;
//a method is a function that belongs to an object.ie sayHellofunction,sayBye Function