//nested objects=Objects inside of other objects.
//              Allows you to represent more complex data structures
//               child Object is enclosed by a parent Object

//                Person{Address{},ContactInfo{}}
//                ShoppingCart{Keyboard{},Mouse{},Monitor{}}

const person={
    fullName:"Spongebob Squarepants",
    age:30,
    isStudent:true,
    hobbies:["Karate","jellyfishing","cooking"],
    address:{
        street:"124 Conch St.",
        city:"Bikini Bottom",
        country:"Int. waters"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.city);
console.log(person.address.street);
console.log(person.address.country);
console.log(person.isStudent);

for(const addresses in person.address){
    console.log(person.address[addresses])
}

//------------------EXAMPLE 2-----------------

class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}
class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

const person1=new Person("Spongebob",30,"124 Conch St.",
                                        "Bikini Bottom",
                                        "Int. Waters")

const person2=new Person("Patrick", 37,"128 Conch St.",
                                        "Bikini Bottom",
                                        "Int.Waters")   
                                        

const person3=new Person("Squidward", 45,"126 Conch St.",
                                        "Bikini Bottom",
                                        "Int.Waters")

console.log(person1.address);
console.log(person1.address.street);
console.log(person1.address.country);
