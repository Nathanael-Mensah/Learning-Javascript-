//this=reference to the object where this is used
//the object depends on the immediate context
//person.name=this.name

const person1={
    name:"Spongebob",
    Favfood:"Hamburgers",
    sayHello:function(){console.log(`Hi I am ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.Favfood}`)}
}
const person2={
    name:"Patrick",
    Favfood:"pizza",
    sayHello:function(){console.log(`Hi I am ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.Favfood}`)}
}
console.log(person1.name);
console.log(person2.name);
person1.eat();
person2.eat()
