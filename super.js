class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`This ${this.name} runs at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed;
    };
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runspeed)
    };
};
class Hawk extends Animal{
    constructor(name,age,flightspeed){
        super(name,age);
        this.flightspeed=flightspeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flightspeed);
    };
}
class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age)
        this.swimspeed=swimspeed;
    };
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimspeed)
    }
    
}

const rabbit= new Rabbit("rabbit",3,15);
const hawk=new Hawk("hawk",3,10);
const fish=new Fish("fish",2,7);

console.log(rabbit.runspeed);
console.log(rabbit.age);
console.log(rabbit.name);

console.log(hawk.flightspeed);
console.log(hawk.name);
console.log(hawk.age);


console.log(fish.swimspeed);
console.log(fish.name);
console.log(fish.age);

fish.swim();
hawk.fly();
rabbit.run()
