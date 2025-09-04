//Array:list of items[]
//objects:key,value pairs {}
//Array of objects=list of objects

const users=[
    {id:1,name:"Nathanael",age:20},
    {id:2,name:"Ama",age:22},
    {id:3,name:"Kojo",age:19}
];
console.log(users[0]);//id:1, name:Nathanael,age:20
console.log(users[0].name);//Nathanael
console.log(users[1].name);//Ama
console.log(users[2].age);//19

//for loop
for(let i=0;i < users.length;i++){
    console.log(users[i])
}
//for ....of loop
for(let user of users){
    console.log(user.age)
}

users.forEach(user => console.log(user.id))

const Ama=users.find(user => user.name==="Ama")
console.log(Ama)

const young=users.filter(user =>user.age <21)
console.log(young)

const names=users.map(user => user.name.charAt(0).toUpperCase()+user.name.slice(1).toLowerCase())
console.log(names)

const username=users.map(user => user.name)
console.log(username)

users.push({id:4,name:"Gloria",age:24})
console.log(users)

const upper=users.slice(user => user.name.CharAt(0).toUpperCase.slice(1).lower)
console.log(upper)

const classes=[
    {id:1,age:20,name:["Nathanael","Adrian"]},
    {id:2,name:"Audrey",age:23},
    {id:3,name:"Louis",age:19},
];
console.log(classes[0].name[1])