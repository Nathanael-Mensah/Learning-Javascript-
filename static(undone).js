class mathUtility{
    static PI=3.14159

    static getDiameter(radius){
        return radius * 2;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
}
console.log(mathUtility.PI);
console.log(mathUtility.getCircumference(2));
console.log(mathUtility.getArea(5));
console.log(mathUtility.getDiameter(10));

class User{
    
    static UserCount=0;
    constructor(username){
        this.username=username;
        User.UserCount=UserCount;
        User+=UserCount
    
    getUserCount(){
        console.log(`There are ${User.UserCount}`)
    }
    sayHello(){
        console.log(`Hi,I am ${this.username}`)
    }
}
user1=new User("Nathanael",25);
user2=new User("Patrick",22);

User.UserCount();