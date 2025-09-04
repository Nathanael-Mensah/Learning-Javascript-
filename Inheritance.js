//Inheritance=allows a new class to inherit properties and methods from an existing class(parent ->)
//helps with code reusabilitty
class Animal{
    constructor(is_alive=true){
        this.is_alive=is_alive
    };
    eat(){
        console.log(`This ${this.name} is eating`)
    };
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    };
};
class Rabbit extends Animal{
    constructor(){
        super(false)
        this.name="Rabbit"
    };
    run(){
        console.log(`${this.name} is running`)
    };
}
class Fish extends Animal{
    constructor(){
        super()
        this.name="fish"
    };
    swim(){
        console.log(`${this.name} is swimming`)
    };
}
class Hawk extends Animal{
    constructor(){
        super()
        this.name="hawk"
    }
    fly(){
        console.log(`${this.name} is flying`)
    }
}
const rabbit=new Rabbit();
const fish=new Fish();
const hawk=new Hawk();

console.log(rabbit.is_alive);
rabbit.run();
rabbit.eat();
rabbit.sleep();

console.log(hawk.is_alive);
hawk.eat();
hawk.fly();
hawk.sleep();

console.log(rabbit.is_alive);
fish.eat();
fish.swim();
fish.sleep();